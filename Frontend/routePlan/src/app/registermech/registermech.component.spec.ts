import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermechComponent } from './registermech.component';

describe('RegistermechComponent', () => {
  let component: RegistermechComponent;
  let fixture: ComponentFixture<RegistermechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
