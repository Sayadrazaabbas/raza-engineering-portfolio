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
  if (project.liveUrl) {
    const liveLink = document.createElement('a');
    liveLink.className = 'live-site-link';
    liveLink.target = '_blank';
    liveLink.rel = 'noopener noreferrer';
    liveLink.innerHTML = 'Visit live website <span aria-hidden="true">↗</span>';
    liveLink.href = project.liveUrl;
    document.querySelector('.case-hero').append(liveLink);
  }
  const evidence = evidenceFor(project);
  document.getElementById('case-evidence-title').textContent=evidence.title;
  document.getElementById('case-evidence-detail').textContent=evidence.detail;
  const media = (window.PORTFOLIO_MEDIA || {})[project.id];
  if (media?.images?.length || media?.videos?.length || media?.video) {
    const section = document.getElementById('case-media');
    const gallery = document.getElementById('case-gallery');
    section.hidden = false;
    document.getElementById('case-media-note').textContent = media.videoNote || 'Selected original project photographs, prepared as optimized web copies.';
    const allVideos = media.videos || (media.video ? [media.video] : []);
    allVideos.forEach((source, index) => {
      const video = document.createElement('video');
      video.className = 'gallery-video';
      video.src = source;
      video.controls = true;
      video.preload = 'metadata';
      video.setAttribute('aria-label', `${project.title} project video ${index + 1}`);
      gallery.append(video);
    });
    media.images.forEach((source, index) => {
      const link = document.createElement('a');
      link.href = source;
      link.className = 'gallery-item';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const image = document.createElement('img');
      image.src = source;
      image.alt = `${project.title} — project image ${index + 1}`;
      image.loading = 'lazy';
      link.append(image);
      gallery.append(link);
    });
  }
}
