import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // Hard-coded teacher account
  private teacher = {
    email: 'teacher@gmail.com',
    password: '12345'
  };

  login(email: string, password: string): boolean {
    if (email === this.teacher.email && password === this.teacher.password) {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('loggedIn');
  }
}
