
const progress = document.getElementById('progress');
const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const secretButton = document.getElementById('secretButton');
const secretMessage = document.getElementById('secretMessage');
secretButton.addEventListener('click', () => {
  secretMessage.classList.toggle('show');
  secretButton.textContent = secretMessage.classList.contains('show')
    ? 'Ya lo viste, ahora disimula'
    : 'Presiona bajo tu propio riesgo';
});
