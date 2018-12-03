import {Component, ViewChild} from '@angular/core';
import {Course} from "./model/Course";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CoursesService} from "./services/courses.service";
import { CourseCardComponent } from './course-card/course-card.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses$: Observable<Course[]>;

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  onCourseSelected(course: Course){
    console.log(this.card);
    this.card.course.description="hello";
  }

  constructor(private coursesService: CoursesService){
  }
  ngOnInit(){
    this.courses$ =  this.coursesService.loadCourses();
  }

}
