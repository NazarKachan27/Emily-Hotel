document.addEventListener("DOMContentLoaded", function() {
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
      currentSlide = index;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function startSlider() {
      setInterval(nextSlide, 3000); // Переключення слайдів кожні 3 секунди
    }

    startSlider();
  })
})

SmoothScroll({
  // Час скролла 400 = 0.4 секунди
  animationTime : 800,
  // Розмір кроку у пікселях
  stepSize : 75,

  // Прискорення
  accelerationDelta : 30,
  // Максимальне прискорення
  accelerationMax : 2,
  
  // Поддержка клавиатуры
  keyboardSupport : true,
  // Крок скролла стрілками на клавіатурі в пікселях
  arrowScroll : 50,

  // Співвідношення "хвоста" до "прискорення"
  pulseAlgorithm : true,
  pulseScale : 4,
  pulseNormalize : 1,
  
  // Підтримка тачпада
  touchpadSupport : true,
  })

  