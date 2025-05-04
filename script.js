

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Scroll reveal animation using Intersection Observer
const revealSections = document.querySelectorAll('.hero-section, .about, .skills');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing after reveal
    }
  });
}, { threshold: 0.1 });

revealSections.forEach(section => {
  revealObserver.observe(section);
});

// Simulated Download CV button behavior
document.querySelectorAll('.btn[href="#"]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    alert("CV download feature will be added soon!");
  });
});
