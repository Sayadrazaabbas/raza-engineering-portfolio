// The R2 bucket must remain private. Cloudflare Access must protect the entire
// Pages hostname before media is uploaded or this route is used publicly.
const allowedPrefixes = ['Images/', 'Videos_To_Review/'];

export async function onRequestGet({request, env}) {
  if (!env.MEDIA) return new Response('Media not configured', {status: 503});

  const pathname = new URL(request.url).pathname;
  let key;
  try {
    key = decodeURIComponent(pathname.slice('/media/'.length));
  } catch {
    return new Response('Invalid media path', {status: 400});
  }
  if (!allowedPrefixes.some(prefix => key.startsWith(prefix)) || key.includes('..') || key.includes('\\')) {
    return new Response('Not found', {status: 404});
  }

  let object;
  try {
    object = await env.MEDIA.get(key, request.headers.has('Range') ? {range: request.headers} : undefined);
  } catch {
    return new Response('Invalid range', {status: 416});
  }
  if (!object) return new Response('Not found', {status: 404});

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('ETag', object.httpEtag);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'private, no-store');
  headers.set('X-Content-Type-Options', 'nosniff');
  const ranged = request.headers.has('Range') && object.range;
  if (ranged) {
    headers.set('Content-Range', `bytes ${object.range.offset}-${object.range.offset + object.range.length - 1}/${object.size}`);
    headers.set('Content-Length', String(object.range.length));
  } else {
    headers.set('Content-Length', String(object.size));
  }
  return new Response(object.body, {status: ranged ? 206 : 200, headers});
}
