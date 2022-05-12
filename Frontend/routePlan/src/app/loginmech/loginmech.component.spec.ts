import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmechComponent } from './loginmech.component';

describe('LoginmechComponent', () => {
  let component: LoginmechComponent;
  let fixture: ComponentFixture<LoginmechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginmechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
