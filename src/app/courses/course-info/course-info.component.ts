import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  public course: Course;

  constructor(
    private activatedRecord: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const courseId = this.activatedRecord.snapshot.paramMap.get('id') ?? 0;

    this.course = this.courseService.getById(+courseId);
  }

  save() {
    this.courseService.save(this.course);
  }
}
