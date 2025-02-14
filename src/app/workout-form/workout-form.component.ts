import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {
  workout = {
    username: '',
    workoutType: '', 
    workoutMinutes: null as number | null
  };

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      if (!this.workout.username || !this.workout.workoutType || !this.workout.workoutMinutes) {
        return;
      }
      
      const existingWorkouts = localStorage.getItem('workouts');
      const workouts = existingWorkouts ? JSON.parse(existingWorkouts) : [];
      

      workouts.push(this.workout);
      

      localStorage.setItem('workouts', JSON.stringify(workouts));
      

      this.router.navigate(['/workout-list']);
    }
  }
}
