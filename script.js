// Mobile menu
const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('open'); });

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('show'); io.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.links a');
window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(s => { if (scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});

// Auto-update age (birthdate: Sept 17, 2002) and footer year
const b = new Date(2002, 8, 17), n = new Date();
let age = n.getFullYear() - b.getFullYear();
if (n < new Date(n.getFullYear(), 8, 17)) age--;
document.getElementById('age').textContent = age + ' yrs old';
document.getElementById('year').textContent = n.getFullYear();

// Project counter
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.dataset.count; let i = 0;
  const t = setInterval(() => { el.textContent = ++i; if (i >= target) { clearInterval(t); el.textContent = target + '+'; } }, 200);
});

// See more projects
const seeMore = document.getElementById('seeMore');
const pgrid = document.querySelector('.pgrid');
seeMore.addEventListener('click', () => {
  const open = pgrid.classList.toggle('expanded');
  seeMore.textContent = open ? 'See Less' : 'See More';
  if (open) pgrid.querySelectorAll('.extra').forEach(el => el.classList.add('show'));
  else document.getElementById('projects').scrollIntoView();
});
