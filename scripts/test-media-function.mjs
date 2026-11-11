import assert from 'node:assert/strict';
import {onRequestGet} from '../functions/media/[[all]].js';

const bytes = new TextEncoder().encode('sample-media');
const bucket = {
  async get(key, options) {
    if (key !== 'Images/Test/example.jpg') return null;
    const range = options ? {offset: 2, length: 3} : undefined;
    return {
      body: range ? bytes.slice(2, 5) : bytes,
      size: bytes.length,
      range,
      httpEtag: '"example"',
      writeHttpMetadata(headers) { headers.set('Content-Type', 'image/jpeg'); },
    };
  },
};

async function request(url, headers = {}, env = {MEDIA: bucket}) {
  return onRequestGet({request: new Request(url, {headers}), env});
}

const full = await request('https://example.pages.dev/media/Images/Test/example.jpg');
assert.equal(full.status, 200);
assert.equal(await full.text(), 'sample-media');
assert.equal(full.headers.get('cache-control'), 'private, no-store');

const partial = await request('https://example.pages.dev/media/Images/Test/example.jpg', {Range: 'bytes=2-4'});
assert.equal(partial.status, 206);
assert.equal(partial.headers.get('content-range'), `bytes 2-4/${bytes.length}`);
assert.equal(await partial.text(), 'mpl');

assert.equal((await request('https://example.pages.dev/media/Images/Test/missing.jpg')).status, 404);
assert.equal((await request('https://example.pages.dev/media/Other/private.txt')).status, 404);
assert.equal((await request('https://example.pages.dev/media/Images/../secret.jpg')).status, 404);
assert.equal((await request('https://example.pages.dev/media/Images/Test/example.jpg', {}, {})).status, 503);
console.log('Media route: 6 checks passed');
