# 为组件添加配置属性

## 前言

本文介绍如何传递配置属性给子组件。其中包括传递简单字符，传递对象；

## 传递字符

* 父亲组件内获取变量（这里直接通过变量传递的方式获取）app.component.ts

```typescript
export class AppComponent {
  coreCourse = COURSES[0];
}
```

* 父组件的模版文件内传递属性,如下，使用中括号包裹属性名，等号后面传递属性值；app.component.html

```html
<app-course-card [title]="coreCourse.description"></app-course-card>
```

* 子组件中注入属性

```typescript
export class CourseCardComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {

  }
}
```

* 子组件前端显示,course-card.component.html

```html
 <div class="course-title">
    {{title}}
  </div>
```



## 传递对象

* 先定义一个对象
```typescript
export interface Course {
  id:number;
  description:string;
  iconUrl: string;
  longDescription: string;
  category:string;
  lessonsCount:number;
}
```

* 父组件内重新定义传递格式  [course]=后面是一个对象元素 ,``coreCourse = COURSES[0];``
```html
<app-course-card [course]="coreCourse"></app-course-card>
```

* 修改子组件ts文件,注入course属性

```typescript
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  constructor() { }

  ngOnInit() {

  }
}
```

* 修改子组件前端显示 

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

</div>
```

