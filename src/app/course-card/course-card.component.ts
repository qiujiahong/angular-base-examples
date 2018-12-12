import {AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../model/Course";
import {CourseImageComponent} from "../course-image/course-image.component";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit ,AfterViewInit{

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  constructor() {
  }

  ngOnInit() {

  }

  onCourseViewed() {
    // console.log("course-card.component : clicked.");
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    // return {'beginner': this.course.category=='BEGINNER'};
    if(this.course.category=='BEGINNER'){
      return ['beginner']
    }
  }

  cardStyles() {
    return {'text-decoration':'underline'};
  }

  ngAfterViewInit(): void {
    console.log(this.image);
  }
}
