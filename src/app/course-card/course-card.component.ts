import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../model/Course";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit() {

  }

  onCourseViewed() {
    console.log("course-card.component : clicked.");
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    // return {'beginner': this.course.category=='BEGINNER'};
    if(this.course.category=='BEGINNER'){
      return ['beginner']
    }
  }
}
