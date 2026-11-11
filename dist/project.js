const id = new URLSearchParams(location.search).get('id');
const project = (window.PORTFOLIO_PROJECTS || []).find(p=>p.id===id);
document.getElementById('year').textContent = new Date().getFullYear();
function evidenceFor(project) {
  const text = `${project.status} ${project.note} ${project.outcome}`.toLowerCase();
  if (/(documented|source|archive|hardware design evidence|pcb and firmware)/.test(text)) {
    return {title:'Documented project material', detail:'Project files, hardware records, or software/PCB evidence have been located. Individual images and assets still require portfolio-safe selection and release review.'};
  }
  return {title:'Evidence curation required', detail:'The project story is documented, but supporting images, test records, or approval for presentation still need to be selected before this case study becomes a media-rich public proof page.'};
}
if (!project) {
  document.title='Project not found — Raza Abbas Sayed';
  document.getElementById('case-title').textContent='Project not found';
  document.getElementById('case-lead').textContent='This project is not in the current portfolio library. Return to all projects to choose another.';
  document.querySelector('.case-facts').hidden=true;
  document.querySelector('.case-body').hidden=true;
} else {
  document.title=`${project.title} — Raza Abbas Sayed`;
  const fields={group:project.group,title:project.title,lead:project.lead,context:project.context,period:project.period,status:project.status,challenge:project.challenge,contribution:project.contribution,system:project.system,outcome:project.outcome,note:project.note};
  Object.entries(fields).forEach(([key,value])=>{document.getElementById(`case-${key}`).textContent=value;});
  const evidence = evidenceFor(project);
  document.getElementById('case-evidence-title').textContent=evidence.title;
  document.getElementById('case-evidence-detail').textContent=evidence.detail;
}
