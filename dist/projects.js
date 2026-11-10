const projects = window.PORTFOLIO_PROJECTS || [];
const list = document.getElementById('project-list');
const search = document.getElementById('project-search');
const resultCount = document.getElementById('result-count');
const filterButtons = [...document.querySelectorAll('[data-group]')];
let activeGroup = 'all';
document.getElementById('project-count').textContent = projects.length;
document.getElementById('year').textContent = new Date().getFullYear();

function render() {
  const term = search.value.trim().toLocaleLowerCase();
  const matching = projects.filter(p => (activeGroup === 'all' || p.group === activeGroup) && [p.title,p.group,p.context,p.lead,p.challenge,p.contribution].join(' ').toLocaleLowerCase().includes(term));
  list.replaceChildren(...matching.map((p,index) => {
    const card = document.createElement('a'); card.className='library-card'; card.href=`project.html?id=${encodeURIComponent(p.id)}`;
    const top = document.createElement('div'); top.className='library-card-top'; top.textContent=`${String(index+1).padStart(2,'0')} / ${p.group.toUpperCase()}`;
    const title = document.createElement('h2'); title.textContent=p.title;
    const summary = document.createElement('p'); summary.textContent=p.lead;
    const bottom = document.createElement('div'); bottom.className='library-card-bottom'; bottom.textContent=`${p.period} · ${p.status}  ↗`;
    card.append(top,title,summary,bottom); return card;
  }));
  resultCount.textContent = `${matching.length} project${matching.length===1?'':'s'} shown`;
  if (!matching.length) { const empty=document.createElement('p');empty.className='empty-state';empty.textContent='No matching projects. Try another term or domain.';list.append(empty); }
}
filterButtons.forEach(button=>button.addEventListener('click',()=>{activeGroup=button.dataset.group;filterButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render();}));
search.addEventListener('input',render);render();
