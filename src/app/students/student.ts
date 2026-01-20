import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  class: string;
  section:string;
  marks: number;
  grade:string;
}

@Injectable({ providedIn: 'root' })
export class StudentService {

  getStudents(): Student[] {
    return JSON.parse(localStorage.getItem('students') || '[]');
  }

  saveStudents(students: Student[]) {
    localStorage.setItem('students', JSON.stringify(students));
  }

  addStudent(student: Student) {
    const students = this.getStudents();
    students.push(student);
    this.saveStudents(students);
  }

  deleteStudent(id: number) {
    const students = this.getStudents().filter(s => s.id !== id);
    this.saveStudents(students);
  }

  getStudentById(id: number): Student | undefined {
    return this.getStudents().find(s => s.id === id);
  }

  updateStudent(updatedStudent: Student) {
    const students = this.getStudents().map(s =>
      s.id === updatedStudent.id ? updatedStudent : s
    );
    this.saveStudents(students);
  }
}
