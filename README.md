# 🏥 Health Tracker

## 📌 Overview
**Health Tracker** is a modern **Single Page Application (SPA)** built with **Angular 17+**, designed to help users log and track their workouts efficiently. Users can input their name, workout type, and duration, and the application provides search, filtering, and pagination features for easy navigation. Additionally, interactive charts visually represent workout progress.

🔗 **Live Demo**: [Health Tracker](https://health-tracker-gold.vercel.app/)  
📂 **GitHub Repository**: [health-tracker](https://github.com/i-akb25/health-tracker/)

---

## ✨ Features
✔️ **Add New Users & Workouts** – Input fields for user name, workout type, and duration  
✔️ **User-Friendly Table Display** – Structured view of workout records  
✔️ **Search Functionality** – Find users by name  
✔️ **Filter Workouts** – Filter data based on workout type  
✔️ **Pagination** – Efficiently manage large datasets  
✔️ **Data Persistence** – Uses `localStorage` to retain user workouts  
✔️ **Charts for Workout Progress** – Graphical representation using **ng2-charts & Charts.js**  
✔️ **Tailwind CSS for Styling** – Modern, responsive UI  
✔️ **Unit Testing** – Implemented with **Jasmine & Karma**  
✔️ **Hosted on Vercel** for easy accessibility  

---

## 🛠️ Tech Stack
- **Frontend**: Angular 17+, TypeScript, HTML, SCSS  
- **Styling**: Tailwind CSS  
- **State Management**: Local Storage  
- **UI Components**: Angular Material  
- **Data Visualization**: ng2-charts, Charts.js  
- **Testing**: Jasmine, Karma  
- **Hosting**: Vercel  

---

## 🚀 Getting Started
### Prerequisites
Ensure you have the following installed:
- **Visual Studio Code** – Code editor  
- **Git Bash** – Git command line  
- **Node.js & npm** – JavaScript runtime and package manager  

### 🔧 Installation & Setup
1️⃣ **Clone the repository**:
```sh
https://github.com/i-akb25/health-tracker.git
cd health-tracker
```
2️⃣ **Install dependencies**:
```sh
npm install
```

### 🏃‍♂️ Running the Development Server
```sh
ng serve
```
🌍 Open [http://localhost:4200/](http://localhost:4200/) in your browser.

### 🏗️ Build for Production
```sh
ng build --prod
```

---

## 🧪 Testing
Run unit and end-to-end tests using Angular's built-in tools.

### ✅ Unit Tests
- **Run unit tests**:
```sh
ng test
```
- **WorkoutFormComponent Test Cases**:
  - ✅ Component Creation: Ensures the component is initialized correctly.
  - ✅ Form Validity: Tests input validation.
  - ✅ Form Submission: Checks if data is stored and the UI updates correctly.

### 🎯 End-to-End (E2E) Tests
- **Run E2E tests**:
```sh
ng e2e
```
*(Requires an E2E testing package to be installed.)*

---

## 📜 Assumptions
- The app initializes with **three default users** and their workout data.
- **Data Persistence**: Workouts are stored using `localStorage`.
- **Pagination** is enabled when more than **five users** exist.
- **Tailwind CSS** is used for a modern, responsive design.

---

## 🎯 Usage Guide
1️⃣ **Navigate** to the "Add Workout" page.  
2️⃣ **Fill out** the form (Name, Workout Type, Duration).  
3️⃣ **Submit** to log the workout.  
4️⃣ **View Workouts** on the "Workout List" page.  
5️⃣ **Search** users by name.  
6️⃣ **Filter** workouts by type.  
7️⃣ **Use Pagination** for large data sets.  
8️⃣ **Track Progress** using the interactive charts.  

---

## 📖 Learnings
During this project, I enhanced my expertise in:

✅ Efficient **State Management** using `localStorage`

✅ **Building Reusable Components** in Angular

✅ **Search & Filter Implementation** using Angular Pipes

✅ **Unit Testing** with **Jasmine & Karma**

✅ **Data Visualization** using **Charts.js**

---

## 👨‍💻 About Me
👤 **Anurag Kumar Bharti**  
📧 [anuragbhartiee25@gmail.com](mailto:anuragbhartiee25@gmail.com)  
🌐 [Portfolio](https://ace-akb.vercel.app/)  
🎓 **Final-Year Electrical Engineering Undergraduate, NIT Patna**  
🚀 Passionate about **Frontend Development, UI/UX, and Web Technologies**  
🔗 **GitHub**: [i-akb25](https://github.com/i-akb25)

---

## 📜 License
This project is **open-source** and developed for the **Fyle Frontend Development Challenge**.

---

