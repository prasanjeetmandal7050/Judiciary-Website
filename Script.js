// ===== Mobile nav toggle =====
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close mobile nav when a link is clicked
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// ===== Carousel arrows =====
document.querySelectorAll('.carousel-arrow').forEach(btn => {
  btn.addEventListener('click', () => {
    const track = document.getElementById(btn.dataset.target);
    if (!track) return;
    const card = track.querySelector('.card');
    const scrollAmount = card ? card.offsetWidth + 20 : 260;
    track.scrollBy({
      left: btn.classList.contains('left') ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  });
});

// ===== Back to top =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== Newsletter subscribe form =====
const subscribeForm = document.getElementById('subscribeForm');
const formMsg = document.getElementById('formMsg');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('subscribeEmail').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    formMsg.textContent = "Thanks! You're subscribed.";
    subscribeForm.reset();
  } else {
    formMsg.textContent = 'Please enter a valid email address.';
  }
});

// ===== Enroll Now buttons scroll to courses =====
document.querySelectorAll('.btn-gold').forEach(btn => {
  if (btn.textContent.trim().startsWith('Enroll Now')) {
    btn.addEventListener('click', () => {
      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    });
  }
});

document.querySelectorAll('.btn-outline').forEach(btn => {
  if (btn.textContent.trim() === 'Explore Courses') {
    btn.addEventListener('click', () => {
      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    });
  }
});