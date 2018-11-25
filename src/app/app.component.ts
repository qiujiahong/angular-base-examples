import {Component} from '@angular/core';
import {Course} from "./model/Course";
import {HttpClient, HttpParams} from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses;

  constructor(private http: HttpClient){

  }
  ngOnInit(){

    //带参数
    const params = new HttpParams()
      .set("_page","1")
      .set("_limit","3");
    this.http.get('/api/courses',{params}).subscribe(
      courses => this.courses = courses
    );

    //无参数
    // this.http.get('/api/courses').subscribe(
    //   courses => this.courses = courses
    // );

    // this.http.get('http://localhost:3000/courses').subscribe(
    //   val =>console.log(val)
    // );
  }

  onCouseSelected(course: Course) {
    console.log("app component - click event ", course);
  }
}
