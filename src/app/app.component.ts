import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Course} from "./model/Course";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CoursesService} from "./services/courses.service";
import { CourseCardComponent } from './course-card/course-card.component';
import {COURSES} from "../db-data";
import {HighlightedDirective} from "./directives/highlighted.directive";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  courses = COURSES;


  @ViewChild(HighlightedDirective)
  // @ViewChild(CourseCardComponent,{read:HighlightedDirective})
  highlighted: HighlightedDirective;

  @ViewChildren(CourseCardComponent)
  cards : QueryList<CourseCardComponent>;

  // @ViewChildren(CourseCardComponent,{read: ElementRef})
  // cards : QueryList<ElementRef>;

  onCourseSelected(course: Course){
    console.log("hello");
  }

  constructor(private coursesService: CoursesService){
  }
  ngOnInit(){

  }

  ngAfterViewInit(): void {
    console.log(this.highlighted);
    // this.cards.changes.subscribe(
    //   cards => console.log(cards)
    // )
    // console.log(this.cards);
  }

  onCourseEdit() {
    this.courses.push(
      {
      id: 1,
      description: "Angular core deep Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: 'INTERMEDIATE',
      lessonsCount: 10
      }
    );
  }

  onToggle($event: any) {
    console.log($event);
  }
}
