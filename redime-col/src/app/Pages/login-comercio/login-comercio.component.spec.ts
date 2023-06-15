import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComercioComponent } from './login-comercio.component';

describe('LoginComercioComponent', () => {
  let component: LoginComercioComponent;
  let fixture: ComponentFixture<LoginComercioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComercioComponent]
    });
    fixture = TestBed.createComponent(LoginComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
