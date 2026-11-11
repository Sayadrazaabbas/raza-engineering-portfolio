import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'dist');
const maxBytes = 25 * 1024 * 1024;
const problems = [];
let count = 0;

function walk(directory) {
  for (const item of fs.readdirSync(directory, {withFileTypes: true})) {
    const fullPath = path.join(directory, item.name);
    if (item.isDirectory()) { walk(fullPath); continue; }
    count++;
    const relative = path.relative(root, fullPath).replaceAll('\\', '/');
    const bytes = fs.statSync(fullPath).size;
    if (bytes > maxBytes) problems.push(`${relative}: exceeds Cloudflare Pages 25 MiB asset limit`);
    if (/\.(mp4|mov|avi|mkv)$/i.test(item.name)) problems.push(`${relative}: video belongs in private R2, not Pages`);
    if (/\.(sch|brd|eagle|ino|hex|bin|zip|pdf)$/i.test(item.name)) problems.push(`${relative}: engineering source/archive is not approved for Pages`);
  }
}

walk(root);
console.log(`Deploy bundle: ${count} files; ${problems.length} packaging problems`);
for (const problem of problems) console.error(problem);
if (problems.length) process.exitCode = 1;
