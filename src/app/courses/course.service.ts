import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly courseUrl = 'http://localhost:3100/api/courses';

  constructor(private httpClient: HttpClient) {}

  getAll() {
    console.log('aqui');
    return this.httpClient.get<Course[]>(this.courseUrl);
  }

  getById(id: number) {
    return this.httpClient.get<Course>(this.courseUrl.concat(`/${id}`));
  }

  save(course: Course) {
    if (course.id) {
      return this.httpClient.put<Course>(
        this.courseUrl.concat(`/${course.id}`),
        course
      );
    } else {
      return this.httpClient.post<Course>(this.courseUrl, course);
    }
  }

  deleteById(id: number) {
    return this.httpClient.delete<any>(this.courseUrl.concat(`/${id}`));
  }
}
