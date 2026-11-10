const buttons = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project')];

buttons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  buttons.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
}));

document.querySelectorAll('.project details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('.project details').forEach(other => {
      if (other !== detail) other.open = false;
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
