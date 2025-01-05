class Carousel {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.activeDot = document.querySelector('.active');
    this.dots = document.querySelectorAll('.carousel-dot');
    this.currentSlideIndex = 0;
    this.slideshowInterval = null;
    this.initialize();
  }

  initialize() {
    document.querySelector('#next-btn').addEventListener('click', () => {
      this.stopSlideshow();
      this.nextSlide();
    });

    document.querySelector('#previous-btn').addEventListener('click', () => {
      this.stopSlideshow();
      this.prevSlide();
    });

    document.querySelector('#carousel-dots').addEventListener('click', (e) => {
      if (!e.target.classList.contains('carousel-dot')) return;
      this.currentSlideIndex = Number(e.target.dataset.dot);
      this.stopSlideshow();
      this.displaySlide();
    });

    this.startSlideshow();
  }

  nextSlide() {
    this.incrementIndex();
    this.displaySlide();
  }

  prevSlide() {
    this.decrementIndex();
    this.displaySlide();
  }

  displaySlide() {
    const visibleImg = document.querySelector('.visible');
    const slideToShow = this.slides[this.currentSlideIndex];

    visibleImg.classList.remove('visible');
    slideToShow.classList.add('visible');

    if (!this.autoplayInterval) {
      this.startSlideshow();
    }

    this.highlightActiveDot();
  }

  incrementIndex() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  decrementIndex() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  startSlideshow(interval = 5000) {
    this.autoplayInterval = setInterval(() => this.nextSlide(), interval);
  }

  stopSlideshow() {
    clearInterval(this.autoplayInterval);
    this.autoplayInterval = null;
  }

  highlightActiveDot() {
    if (this.activeDot.classList.contains('active')) {
      this.activeDot.classList.remove('active');
    }

    this.activeDot = this.dots[this.currentSlideIndex];
    this.dots[this.currentSlideIndex].classList.add('active');
  }
}

new Carousel();
