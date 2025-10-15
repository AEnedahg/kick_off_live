import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernFootballersSlider } from './modern-footballers-slider';

describe('ModernFootballersSlider', () => {
  let component: ModernFootballersSlider;
  let fixture: ComponentFixture<ModernFootballersSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernFootballersSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernFootballersSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
