import {Component} from '@angular/core';
import {Course} from "./model/Course";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CoursesService} from "./services/courses.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService){

  }
  ngOnInit(){
    this.courses$ =  this.coursesService.loadCourses();
  }

}
