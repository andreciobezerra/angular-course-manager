import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent {
  private courses: Course[] = [];
  private filterBy: string;
  public filteredCourses: Course[] = [];

  constructor(private readonly courseService: CourseService) {}

  ngOnInit(): void {
    this.getAll()
  }

  set filter(value: string) {
    this.filterBy = value.toLocaleLowerCase();
    this.filteredCourses = this.courses.filter(
      (course) => course.name.toLowerCase().indexOf(this.filterBy) > -1
    );
  }

  get filter() {
    return this.filterBy;
  }

  getAll(){
    this.courseService.getAll().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.filteredCourses = courses;
      },
      error: (err) => console.error(err),
    });
  }

  deleteById(id: number){
    this.courseService.deleteById(id).subscribe({
      next: ()=> this.getAll(),
      error: (err) => console.error(err)      
    })
  }
}
