import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imageURL: '/assets/images/forms.png',
        price: 99.99,
        code: 'ANGF-666',
        duration: 120,
        rate: 4.0,
        releaseDate: '2019-12-02',
      },
      {
        id: 2,
        name: 'Angular HTTP',
        imageURL: '/assets/images/http.png',
        price: 99.99,
        code: 'ANGH-666',
        duration: 120,
        rate: 4.5,
        releaseDate: '2021-02-01',
      },
    ];
  }
}
