import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutProgressComponent } from './workout-progress.component';

describe('WorkoutProgressComponent', () => {
  let component: WorkoutProgressComponent;
  let fixture: ComponentFixture<WorkoutProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkoutProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a user and update chart data', () => {
    const user = { name: 'User 1' };
    component.selectUser(user);
    expect(component.selectedUser).toEqual(user);
    expect(component.chartData.length).toBeGreaterThan(0);
    expect(component.chartData[0].label).toContain(user.name);
  });
});
