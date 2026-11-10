import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..', 'dist');
const sandbox = {window: {}};
vm.runInNewContext(fs.readFileSync(path.join(root,'project-data.js'),'utf8'), sandbox);
const projects = sandbox.window.PORTFOLIO_PROJECTS;
const fields = ['id','title','group','period','context','status','lead','challenge','contribution','system','outcome','note'];
const ids = new Set(projects.map(project => project.id));
const problems = [];
if (ids.size !== projects.length) problems.push('Duplicate project ID');
for (const project of projects) for (const field of fields) if (!project[field]) problems.push(`${project.id}: missing ${field}`);
const homeScript = fs.readFileSync(path.join(root,'script.js'),'utf8');
const match = homeScript.match(/const featuredIds = \[([^\]]+)\]/);
if (!match) problems.push('Featured project IDs missing');
else for (const [,id] of match[1].matchAll(/'([^']+)'/g)) if (!ids.has(id)) problems.push(`Unknown featured ID: ${id}`);
for (const page of ['index.html','projects.html','project.html','research.html']) {
  const html = fs.readFileSync(path.join(root,page),'utf8');
  for (const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (url.startsWith('http') || url.startsWith('#')) continue;
    const target = url.split('#')[0].split('?')[0];
    if (target && !fs.existsSync(path.join(root,target))) problems.push(`${page}: missing ${target}`);
  }
}
console.log(`${projects.length} projects; ${ids.size} unique IDs; ${problems.length} validation problems`);
if (problems.length) { for (const problem of problems) console.error(problem); process.exitCode=1; }
