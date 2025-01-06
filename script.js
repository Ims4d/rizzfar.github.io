document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const appContainer = document.getElementById('app-container');
  const imageProfile = document.getElementById('image-profile');
  const toggleButton = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const body = document.body;

  AOS.init();

  document.body.style.overflowY = 'hidden';
  imageProfile.style.display = 'none';
  toggleButton.style.display = 'none';
  
  setTimeout(() => {
    loader.style.display = 'none';
    appContainer.style.display = 'block';
    document.body.style.overflowY = 'auto';
    imageProfile.style.display = 'block';
    toggleButton.style.display = 'block';
  }, 3000);

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  
    if (body.classList.contains('dark-mode')) {
      darkModeIcon.classList.remove('fa-sun');
      darkModeIcon.classList.add('fa-moon');
    } else {
      darkModeIcon.classList.remove('fa-moon');
      darkModeIcon.classList.add('fa-sun');
    }
  });
})