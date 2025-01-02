class Carousel {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
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

    this.displaySlide();
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
}

new Carousel();
