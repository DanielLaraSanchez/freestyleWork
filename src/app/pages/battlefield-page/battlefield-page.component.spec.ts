import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlefieldPageComponent } from './battlefield-page.component';

describe('BattlefieldPageComponent', () => {
  let component: BattlefieldPageComponent;
  let fixture: ComponentFixture<BattlefieldPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlefieldPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattlefieldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
