// basic interactivity: play alert + hamburger toggle
document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.querySelector('.play');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      alert('Playing Stranger Things trailer 🎬');
    });
  }

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    // close menu when a link is clicked
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }
});