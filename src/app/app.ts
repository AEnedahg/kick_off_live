import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroNav } from './components/hero-nav/hero-nav';
import { ImageSliderComponent } from './components/modern-footballers-slider/modern-footballers-slider';
import { Cta } from './components/cta/cta';
import { HomeComponent } from './home/home';
import { PlayerOfMonthOne } from './components/player-of-month-one/player-of-month-one';
import { Features } from './components/features/features';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageSliderComponent, HeroNav, Cta, HomeComponent, PlayerOfMonthOne, Features, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kick_off_live');
  
}
