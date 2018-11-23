# 自定义事件@Output

## 前言

本节讲解如何使用@Output()注解实现custom event。



## 操作步骤

* 父组件模版内声明一个自定义函数

```html
<div class="top-menu">
  <img class="logo"
       src="https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png">
</div>

<h1>{{coreCourse.description}}</h1>
<div class="courses">
  <!--courseSelected 是自定义 EventEmitter需要与子组件保持一致-->
  <!--onCouseSelected 是父亲组件的响应函数，$event是EventEmitter传递过来的参数-->
  <app-course-card (courseSelected)="onCouseSelected($event)" [course]="coreCourse"></app-course-card>
</div>

```

* 父组件ts文件中实现事件函数  
```typescript
export class AppComponent {

  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2];

  //事件函数
  onCouseSelected(course:Course) {
    console.log("app component - click event ",course);
  }
}

```

* 子组件内实现事件，并触发EventEmitter事件

```typescript
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {

  }
  onCourseViewed(){
    console.log("course-card.component : clicked.");
    this.courseSelected.emit(this.course);
  }
}
```

```html
<div class="course-card">

  <div class="course-title">
    {{course.description}}
  </div>
  <img width="300" alt="Angular Logo"
       [src]="course.iconUrl">

  <div class="course-description">
    {{course.longDescription}}
  </div>
  <button (click)="onCourseViewed()" >view </button>
</div>
```


