import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechandiserComponent } from './mechandiser.component';

describe('MechandiserComponent', () => {
  let component: MechandiserComponent;
  let fixture: ComponentFixture<MechandiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechandiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechandiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
