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
  // courses;

  constructor(private http: HttpClient,
              private coursesService: CoursesService){

  }
  ngOnInit(){

    const params = new HttpParams()
      .set("_page","1")
      .set("_limit","3");
    this.courses$ = this.http.get<Course[]>('/api/courses',{params});

    //带参数
    // const params = new HttpParams()
    //   .set("_page","1")
    //   .set("_limit","3");
    // this.http.get('/api/courses',{params}).subscribe(
    //   courses => this.courses = courses
    // );

    //无参数
    // this.http.get('/api/courses').subscribe(
    //   courses => this.courses = courses
    // );

    // this.http.get('http://localhost:3000/courses/1').subscribe(
    //   val =>console.log(val)
    // );

    // this.http.get('/api/courses/1').subscribe(
    //   val =>console.log(val)
    // );
  }


}
