import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
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
export class AppComponent  implements AfterViewInit{

  courses$: Observable<Course[]>;

  @ViewChild('container')
  containerDiv: ElementRef;

  // @ViewChild(CourseCardComponent)
  // card: CourseCardComponent;

  @ViewChild('cardRef1',{read: ElementRef})
  card1: CourseCardComponent;
  @ViewChild('cardRef2')
  card2: CourseCardComponent;

  onCourseSelected(course: Course){
    console.log(this.card1);
    
    console.log(this.card2);

    console.log(this.containerDiv)
  }

  constructor(private coursesService: CoursesService){
  }
  ngOnInit(){
    this.courses$ =  this.coursesService.loadCourses();
  }

  ngAfterViewInit(): void {
    console.log(this.card1);
    console.log(this.card2);
    console.log(this.containerDiv)
  }

}
