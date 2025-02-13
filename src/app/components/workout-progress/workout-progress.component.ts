import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

interface User {
  name: string;
}

@Component({
  selector: 'app-workout-progress',
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.css'],
  standalone: true, 
  imports: [CommonModule, NgChartsModule], 
  schemas: [NO_ERRORS_SCHEMA] 
})

export class WorkoutProgressComponent {
  chartLegend: boolean | undefined; 

  chartType: ChartType = 'bar'; 

  users: User[] = [
    { name: 'User 1' },
    { name: 'User 2' },
    { name: 'User 3' }
  ]; 

  selectedUser: User | null = null; 

  chartOptions: ChartOptions = {
    responsive: true
  };
  chartLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  chartData: { data: number[]; label: string }[] = []; 

  selectUser(user: User) {
    this.selectedUser = user;
    this.updateChartData(); 
  }

  updateChartData() {
    if (this.selectedUser) {
     
      this.chartData = [
        { data: [70, 65, 90, 85], label: `${this.selectedUser.name}'s Workout Progress` }
      ];
      this.chartLegend = true; 
    } else {
      this.chartLegend = false; 

    }
  }
}
