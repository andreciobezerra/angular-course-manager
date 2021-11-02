import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  public course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit() {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id') ?? 0;

    this.courseService.getById(+courseId).subscribe({
      next: (course) => (this.course = course),
      error: (err) => console.error(err),
    });
  }

  save() {
    this.courseService.save(this.course).subscribe({
      next: () => this.router.navigateByUrl('/courses'),
      error: (err) => console.error(err),
    });
  }
}
