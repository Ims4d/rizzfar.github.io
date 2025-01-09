document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const appContainer = document.getElementById('app-container');
  const imageProfile = document.getElementById('image-profile');
  const toggleButton = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const currentPage = document.getElementById('current-page');
  const totalPages = document.getElementById('total-pages');

  let currentIndex = 0;
  const totalSlides = dots.length;


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

  totalPages.textContent = totalSlides;

  function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
    currentPage.textContent = currentIndex + 1;
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      currentIndex = parseInt(e.target.dataset.index);
      updateCarousel();
    });
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  updateCarousel();

})