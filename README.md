## 🏥 Health Tracker

# 📌 Overview

Health Tracker is a Single Page Application (SPA) built using Angular 14+, designed to track user workouts efficiently. Users can input their name, workout type, and workout duration, and the application displays the workout list with search, filtering, and pagination features.

Additionally, charts are included to visually represent the user's workout progress.

🔗 Live Demo: Health Tracker
📂 GitHub Repository: health-tracker

## Introduction

Workout Tracker is an Angular application that allows users to log their workouts. Users can input their names, select workout types, and specify workout durations. The application also provides features for searching and filtering workouts, as well as pagination for easy navigation through the list of users.

## 🚀 Features

✔️ **Add New Users & Workouts** - Input fields for user name, workout type, and workout minutes
✔️ **User-Friendly Table Display** - Shows all workout records in a structured format
✔️ **Search Functionality** - Search for a user by name
✔️ **Filter Workouts** - Filter user data by workout type
✔️ **Pagination** - Manage and display large datasets efficiently
✔️ **Data Persistence** - Uses localStorage to store user workouts
✔️ **Charts for Workout Progress** - Graphical representation of workouts (Bonus Feature)
✔️ **Tailwind CSS for Styling** - Modern and responsive UI

## 🛠️ Tech Stack

- **Frontend**: Angular 17+, TypeScript, HTML, SCSS
- **Styling**: Tailwind CSS
- **State Management**: Local Storage
- **UI Components**: Angular Material
- **Data Visualization**: ng2-charts, Charts.js (Bonus Feature)
- **Testing**: Jasmine, Karma
- **Hosting**: Vercel

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine.

### Prerequisites

- Visual Studio Code - Code Editing, Git Bash - Git command line , Node.js and npm installed on your development machine.

### 🔧 Installation & Setup

1️⃣. Clone the repository:

   ```
   https://github.com/i-akb25/health-tracker.git
   cd health-tracker
   ```

2️⃣. Install dependencies:
   `npm install`

### Development Server

- Run the application locally:
  `ng serve`

🚀 Open the browser and visit http://localhost:4200/

### Build

- To build the project for production:
  `ng build --prod
`

## Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Unit tests for the components are written using Angular's testing utilities and Jasmine. You can run the tests using the following command:

### Test Cases for WorkoutFormComponent

- Component Creation: Checks if the component is created successfully.
- Form Validity: Tests the form's initial invalid state and its validity when all fields are filled.
- Form Submission: Ensures that the workout data is stored in local storage and that the router navigates to the workout list after form submission.

### Running Tests

- Run unit tests:
  `ng test`
- Run end-to-end tests:
  `ng e2e`

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Development server

- I have Deploy the application on a hosting platform like:
- 🌎 https://health-tracker-gold.vercel.app/

## 📜 Assumptions
The app initializes with three default users and their workout data.
Data is stored using localStorage to persist user workout history.
Pagination is applied when the number of users exceeds five.
The UI is designed with Tailwind CSS for modern styling.

## Usage

- Navigate to the Add Workout page.
- Fill out the form with the user name, workout type, and workout duration.
- Submit the form to add the workout.
- Navigate to the Workout List page to view the list of users and their workouts.
- Use the search bar to find users by name.
- Use the filter option to filter users by workout type.
- Use pagination to navigate through the list if there are more than 5 users.
- Navigate to workout progress page to view the workout progress of a user.
- Use the side bar to find users by name to check the weekly pogress.

## 💡 Learnings
During this project, I learned:

✅ Efficient State Management using localStorage
✅ Building Reusable Components in Angular
✅ Search & Filter Implementation with Angular Pipes
✅ Unit Testing with Jasmine & Karma
✅ Data Visualization using Charts.js

## ✨ About Me

👤 Anurag Kumar Bharti
📱 anuragbhartiee25@gmail.com
🌎 https://ace-akb.vercel.app/
🎓 Final-year Electrical Engineering Undergraduate, NIT Patna
🚀 Passionate about Frontend Development, UI/UX, and Web Technologies
🔗 GitHub: i-akb25

## 📜 License
This project is open-source and developed for the Fyle Frontend Development Challenge.

