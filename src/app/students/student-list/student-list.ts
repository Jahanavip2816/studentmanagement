import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';   
import { StudentService, Student } from '../student';

@Component({
  standalone: true,
  selector: 'app-student-list',
  imports: [CommonModule, RouterModule],   // 🔥 ADD RouterModule HERE
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private service: StudentService) {}

  ngOnInit() {
    this.students = this.service.getStudents();
  }

  delete(id: number) {
    this.service.deleteStudent(id);
    this.students = this.service.getStudents();
  }
}
