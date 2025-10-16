import { Component, AfterViewInit, HostListener, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-image-slider',
  templateUrl: 'modern-footballers-slider.html',
  styleUrls: ['modern-footballers-slider.scss'],
})
export class ImageSliderComponent implements AfterViewInit, OnDestroy {
  currentIndex = 0;
  autoSlideInterval: any;
  isDesktop = window.innerWidth >= 1024;

  slidesMobile = [
    { image: 'bellingham', alt: 'bellingham' },
    { image: 'mbappe', alt: 'mbappe' },
    { image: 'bonmati', alt: 'bonmati' },
    { image: 'vinicius-jnr', alt: 'vinicius-jnr' },
    { image: 'haaland', alt: 'haaland'},
    { image: 'ronaldo', alt: 'ronaldo'}
  ];

  @ViewChild('slidesContainer') slidesContainer!: ElementRef;

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 1024;
  }

  getResponsiveImage(name: string): string {
    return this.isDesktop
      ? `assets/${name}-full.webp`
      : `assets/${name}-cropped.jpg`;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 3000);
  }

  nextSlide() {
    const prev = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.slidesMobile.length;
    this.animateSlide(prev);
  }

  prevSlide() {
    const prev = this.currentIndex;
    this.currentIndex =
      (this.currentIndex - 1 + this.slidesMobile.length) %
      this.slidesMobile.length;
    this.animateSlide(prev);
  }

  animateSlide(prevIndex: number) {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;


    gsap.set(slides, { xPercent: 100, opacity: 1 });
    gsap.set(slides[this.currentIndex], { xPercent: 100 });
    gsap.set(slides[prevIndex], { xPercent: 0 });

    gsap.to(slides[this.currentIndex], {
      xPercent: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    });

    gsap.to(slides[prevIndex], {
      xPercent: -100,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  }
}
