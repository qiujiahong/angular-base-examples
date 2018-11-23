import { Component } from '@angular/core';
import {COURSES} from "../db-data";
import {Course} from "./model/Course";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  onCouseSelected(course:Course) {
    console.log("app component - click event ",course);
  }
}
