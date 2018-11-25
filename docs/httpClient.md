# http获取数据

## 前言

本文介绍如何从服务器上通过http get获取数据.


## 操作步骤

* 引入app.module.ts文件中引入HttpClientModule 


```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


* 设置proxy规则proxy.json

```json
{
  "/api": {
    "target": "http://localhost:3000/courses",
    "secure": false
  }
}
```

* package.json文件中修改start `"start": "ng serve --proxy-config ./proxy.json",``配置proxy，后续启动服务器使用npm start


* 替换原有获取数据代码


```typescript
import {Component} from '@angular/core';
import {COURSES} from "../db-data";
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

```

