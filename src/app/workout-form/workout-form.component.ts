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
    workoutType: 'Cycling',
    workoutMinutes: null as number | null
  };

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      workouts.push(this.workout);
      localStorage.setItem('workouts', JSON.stringify(workouts));
      this.router.navigate(['/workout-list']);
    }
  }
}
