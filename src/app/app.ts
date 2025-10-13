import { Component, signal, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kick_off_live');
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
