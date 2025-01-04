document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const appContainer = document.getElementById('app-container');
  const imageProfile = document.getElementById('image-profile');

  document.body.style.overflowY = 'hidden';
  imageProfile.style.display = 'none';
  
  setTimeout(() => {
    loader.style.display = 'none';
    appContainer.style.display = 'block';
    document.body.style.overflowY = 'auto';
    imageProfile.style.display = 'block';
  }, 3000)
})