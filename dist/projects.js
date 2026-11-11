const projects = window.PORTFOLIO_PROJECTS || [];
const list = document.getElementById('project-list');
const search = document.getElementById('project-search');
const resultCount = document.getElementById('result-count');
const filterButtons = [...document.querySelectorAll('[data-group]')];
const evidenceButtons = [...document.querySelectorAll('[data-evidence]')];
let activeGroup = 'all';
let activeEvidence = 'all';
document.getElementById('project-count').textContent = projects.length;
document.getElementById('year').textContent = new Date().getFullYear();

function evidenceFor(project) {
  const text = `${project.status} ${project.note} ${project.outcome}`.toLowerCase();
  if (/(documented|source|archive|hardware design evidence|pcb and firmware)/.test(text)) {
    return {key:'documented', label:'DOCUMENTED FILES', detail:'Project files or build evidence located'};
  }
  return {key:'review', label:'EVIDENCE REVIEW', detail:'Supporting material needs selection or approval'};
}

function render() {
  const term = search.value.trim().toLocaleLowerCase();
  const matching = projects.filter(p => (activeGroup === 'all' || p.group === activeGroup) && (activeEvidence === 'all' || evidenceFor(p).key === activeEvidence) && [p.title,p.group,p.context,p.lead,p.challenge,p.contribution].join(' ').toLocaleLowerCase().includes(term));
  list.replaceChildren(...matching.map((p,index) => {
    const card = document.createElement('a'); card.className='library-card'; card.href=`project.html?id=${encodeURIComponent(p.id)}`;
    const top = document.createElement('div'); top.className='library-card-top'; top.textContent=`${String(index+1).padStart(2,'0')} / ${p.group.toUpperCase()}`;
    const title = document.createElement('h2'); title.textContent=p.title;
    const summary = document.createElement('p'); summary.textContent=p.lead;
    const evidence = evidenceFor(p);
    const proof = document.createElement('div'); proof.className=`evidence-badge ${evidence.key}`; proof.innerHTML=`<strong>${evidence.label}</strong><span>${evidence.detail}</span>`;
    const bottom = document.createElement('div'); bottom.className='library-card-bottom'; bottom.textContent=`${p.period} · ${p.status}  ↗`;
    card.append(top,title,summary,proof,bottom); return card;
  }));
  resultCount.textContent = `${matching.length} work record${matching.length===1?'':'s'} shown`;
  if (!matching.length) { const empty=document.createElement('p');empty.className='empty-state';empty.textContent='No matching projects. Try another term or domain.';list.append(empty); }
}
filterButtons.forEach(button=>button.addEventListener('click',()=>{activeGroup=button.dataset.group;filterButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render();}));
evidenceButtons.forEach(button=>button.addEventListener('click',()=>{activeEvidence=button.dataset.evidence;evidenceButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render();}));
search.addEventListener('input',render);render();
