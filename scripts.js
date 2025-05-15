// ==== Smooth Anchor Scrolling ====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==== Theme Toggle (Reusable, Global) ====
(function () {
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  // Apply saved theme
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    // Optional: Default theme
    body.classList.add('light-theme');
  }

  // Toggle if button exists
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = body.classList.contains('dark-theme');
      body.classList.toggle('dark-theme', !isDark);
      body.classList.toggle('light-theme', isDark);

      localStorage.setItem('theme', isDark ? 'light-theme' : 'dark-theme');
    });
  }
})();
