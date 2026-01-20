import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService, Student } from '../student';

@Component({
  standalone: true,
  selector: 'app-update-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-student.html',
  styleUrls: ['./update-student.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student = {
    id: 0,
    name: '',
    class: '',
    section:'',
    marks: 0,
    grade:''
  };

  constructor(
    private route: ActivatedRoute,
    private service: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const data = this.service.getStudentById(id);

    if (data) {
      this.student = { ...data };
    }
  }

  update() {
    this.service.updateStudent(this.student);
    alert('Student Updated Successfully');
    this.router.navigate(['/teacher/students']);
  }
}
