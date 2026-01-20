import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth';

@Component({
  standalone: true,
  selector: 'app-teacherdashboard',
  imports: [RouterModule],
  templateUrl: './teacherdashboard.html',
  styleUrl:'./teacherdashboard.css'
})
export class TeacherDashboardComponent {

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
