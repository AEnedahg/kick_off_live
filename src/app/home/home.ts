import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy, NgZone } from '@angular/core';
import gsap from 'gsap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: [],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slides', { static: false }) slidesEl!: ElementRef<HTMLDivElement>;
  slidesArray = [0, 1, 2];
  currentIndex = 0;
  autoSlideInterval: any;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    if (!this.slidesEl?.nativeElement) return;
    gsap.set(this.slidesEl.nativeElement, { x: 0 });

    this.ngZone.runOutsideAngular(() => {
      this.autoSlideInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.nextSlide();
        });
      }, 4000);
    });
  }

  moveSlide() {
    if (!this.slidesEl?.nativeElement) return;
    const slideWidth = this.slidesEl.nativeElement.offsetWidth;

    gsap.to(this.slidesEl.nativeElement, {
      x: -this.currentIndex * slideWidth,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slidesArray.length;
    this.moveSlide();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slidesArray.length) % this.slidesArray.length;
    this.moveSlide();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.moveSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
