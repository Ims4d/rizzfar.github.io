document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const appContainer = document.getElementById('app-container');
  document.body.style.overflowY = 'hidden';
  
  setTimeout(() => {
    loader.style.display = 'none';
    appContainer.style.display = 'block';
    document.body.style.overflowY = 'auto';
  }, 3000)
})