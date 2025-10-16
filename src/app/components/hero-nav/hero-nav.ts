import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-nav',
  imports: [RouterLink],
  templateUrl: './hero-nav.html',
  styleUrl: './hero-nav.scss'
})
export class HeroNav {
  @ViewChild('mobileMenu', { static: true }) mobileMenu!: ElementRef<HTMLDivElement>;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      gsap.to(this.mobileMenu.nativeElement, {
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    } else {
      gsap.to(this.mobileMenu.nativeElement, {
        x: '100%',
        duration: 0.6,
        ease: 'power3.in',
      });
    }
  }

  closeMenu() {
    this.menuOpen = false;
    gsap.to(this.mobileMenu.nativeElement, {
      x: '100%',
      duration: 0.6,
      ease: 'power3.in',
    });
  }
}
