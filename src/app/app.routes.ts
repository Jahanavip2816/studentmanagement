import { Router, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { TeacherDashboardComponent } from './dashboards/teacherdashboard/teacherdashboard';
import { StudentListComponent } from './students/student-list/student-list';
import { StudentFormComponent } from './students/student-form/student-form';
import { AuthGuard } from './guards/auth-guard';
import { UpdateStudentComponent } from './students/update-student/update-student';
import { provideRouter } from '@angular/router';
import { withHashLocation } from '@angular/router';
import { App } from './app';
import { bootstrapApplication } from '@angular/platform-browser';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'update-student/:id', component: UpdateStudentComponent },


  { 
    path: 'teacher', 
    component: TeacherDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'students', component: StudentListComponent },
      { path: 'add-student', component: StudentFormComponent },
      { path: 'update-student/:id', component: UpdateStudentComponent }

    ]
  }
];
bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withHashLocation()) ]
});

