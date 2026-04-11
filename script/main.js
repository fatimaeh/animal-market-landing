// Select all sections with scroll animation
const sections = document.querySelectorAll(".scroll-section");

// Create observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.15
});

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});