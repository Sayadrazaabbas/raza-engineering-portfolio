import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'dist');
const host = '127.0.0.1';
const port = Number(process.env.PORTFOLIO_PORT || 4173);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

http.createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url || '/', `http://${host}`).pathname); }
  catch { response.writeHead(400).end('Bad request'); return; }
  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const target = path.resolve(root, relative);
  if (target !== root && !target.startsWith(root + path.sep)) { response.writeHead(403).end('Forbidden'); return; }
  let stat;
  try { stat = fs.statSync(target); }
  catch { response.writeHead(404).end('Not found'); return; }
  if (!stat.isFile()) { response.writeHead(404).end('Not found'); return; }
  response.writeHead(200, {
    'Content-Type': mime[path.extname(target).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });
  if (request.method === 'HEAD') { response.end(); return; }
  fs.createReadStream(target).pipe(response);
}).listen(port, host, () => {
  console.log(`Portfolio local preview: http://${host}:${port}/`);
  console.log('Press Ctrl+C to stop. Changes to dist/ appear after browser refresh.');
});
