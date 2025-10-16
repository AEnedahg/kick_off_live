import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNav } from './hero-nav';

describe('HeroNav', () => {
  let component: HeroNav;
  let fixture: ComponentFixture<HeroNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
