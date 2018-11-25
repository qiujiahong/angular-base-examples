import {Component} from '@angular/core';
import {COURSES} from "../db-data";
import {Course} from "./model/Course";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.http.get('/courses/courses').subscribe(
      val =>console.log(val)
    );

    // this.http.get('http://localhost:3000/courses').subscribe(
    //   val =>console.log(val)
    // );
  }

  onCouseSelected(course: Course) {
    console.log("app component - click event ", course);
  }
}
