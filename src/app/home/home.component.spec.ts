import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HomeComponent', () => {

    it('should calculate age correctly for a past birthday', () => {
      component.calculateAge('2000-01-01');
      expect(component.age).toBe(new Date().getFullYear() - 2000);
    });

    it('should calculate age correctly for a birthday later this year', () => {
      const today = new Date();
      const futureBirthday = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
      component.calculateAge(futureBirthday.toISOString().split('T')[0]);
      expect(component.age).toBe(today.getFullYear() - futureBirthday.getFullYear() - 1);
    });

    it('should calculate age correctly for a birthday today', () => {
      const today = new Date();
      component.calculateAge(today.toISOString().split('T')[0]);
      expect(component.age).toBe(today.getFullYear() - today.getFullYear());
    });

    it('should calculate age correctly for a birthday earlier this year', () => {
      const today = new Date();
      const pastBirthday = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
      component.calculateAge(pastBirthday.toISOString().split('T')[0]);
      expect(component.age).toBe(today.getFullYear() - pastBirthday.getFullYear());
    });
  });
});
