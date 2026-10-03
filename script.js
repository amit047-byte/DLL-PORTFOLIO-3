// Amitabha Ghosh Portfolio - Minimalist & Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  const html = document.documentElement;

  function updateThemeUI(isDark) {
    if (isDark) {
      html.classList.add('dark');
      if (themeText) themeText.textContent = 'Light Mode';
    } else {
      html.classList.remove('dark');
      if (themeText) themeText.textContent = 'Dark Mode';
    }
  }

  const savedTheme = localStorage.getItem('theme');
  const isDarkInitial = savedTheme !== 'light';
  updateThemeUI(isDarkInitial);

  themeToggle?.addEventListener('click', () => {
    const isCurrentlyDark = html.classList.contains('dark');
    const newIsDark = !isCurrentlyDark;
    updateThemeUI(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  });

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  menuBtn?.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  });

  // 3. Copy Email with Toast
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText('amitabhghosh3481@gmail.com').then(() => {
      copyBtn.textContent = 'Copied!';
      toast.style.opacity = '1';
      toast.style.transform = 'translate(-50%, -10px)';
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 0)';
      }, 2000);
    });
  });

  // 4. Interactive Hover Effect on Background Dots
  window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  }, { passive: true });
});
