import {Component} from '@angular/core';
import {COURSES} from "../db-data";
import {Course} from "./model/Course";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  startDate = new Date(2018, 12, 1);
  title = COURSES[0].description;
  price = 9.99;
  rate = 0.85;

  course = COURSES[0];

  onCouseSelected(course: Course) {
    console.log("app component - click event ", course);
  }
}
