import {Injectable} from '@angular/core';
import {Course} from "../model/Course";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set("_page", "1")
      .set("_limit", "3");
    return this.http.get<Course[]>('/api/courses', {params});
  }
}
