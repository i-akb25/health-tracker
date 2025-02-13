import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts'; // Import the module
import { Chart, registerables } from 'chart.js'; // Import Chart and registerables
import { routes } from './app.routes'; // Import routes

import { AppComponent } from './app.component';
import { WorkoutProgressComponent } from './components/workout-progress/workout-progress.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // Updated to include routes
    NgChartsModule,  // Include NgChartsModule
    NgxPaginationModule,
  ],
})
export class AppModule {
  constructor() {
    Chart.register(...registerables); // Register all chart types
  }
}

// Bootstrap the application
import { bootstrapApplication } from '@angular/platform-browser';
bootstrapApplication(AppComponent);
