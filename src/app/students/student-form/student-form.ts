import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService, Student } from '../student';

@Component({
  standalone: true,
  selector: 'app-student-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.html',
  styleUrl:'./student-form.css'
})
export class StudentFormComponent {

  student: Student = {
    id: 0,
    name: '',
    class: '',
    section:'',
    marks: 0,
    grade:''
  };

  constructor(private service: StudentService, private router: Router) {}

  save() {
    // Generate simple auto id
    this.student.id = Date.now();

    this.service.addStudent(this.student);

    alert('Student Added Successfully');

    // Go back to student list
    this.router.navigate(['/teacher/students']);
  }
}
