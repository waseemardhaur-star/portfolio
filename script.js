// Select all sections
const sections = document.querySelectorAll("section");

// Animation when scrolling
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

// Observe every section
sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
