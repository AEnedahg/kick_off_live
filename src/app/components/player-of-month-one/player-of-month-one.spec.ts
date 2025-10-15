import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOfMonthOne } from './player-of-month-one';

describe('PlayerOfMonthOne', () => {
  let component: PlayerOfMonthOne;
  let fixture: ComponentFixture<PlayerOfMonthOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerOfMonthOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerOfMonthOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
