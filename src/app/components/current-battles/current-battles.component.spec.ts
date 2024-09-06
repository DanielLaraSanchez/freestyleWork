import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBattlesComponent } from './current-battles.component';

describe('CurrentBattlesComponent', () => {
  let component: CurrentBattlesComponent;
  let fixture: ComponentFixture<CurrentBattlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentBattlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
