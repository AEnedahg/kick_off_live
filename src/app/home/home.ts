import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const slides = gsap.utils.toArray<HTMLElement>('.slide');
    let current = 0;

    gsap.set(slides[0], { opacity: 1 });

    setInterval(() => {
      const next = (current + 1) % slides.length;
      gsap.to(slides[current], { opacity: 0, duration: 1 });
      gsap.to(slides[next], { opacity: 1, duration: 1 });
      current = next;
    }, 3000);
  }
}
