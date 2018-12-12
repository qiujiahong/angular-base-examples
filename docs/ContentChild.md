# ContentChild指令

## 前言

content child 可以读取组件符号内部的html元素

## 代码

* app.component.html  

```html
  <app-course-card
    (courseSelected)="onCourseSelected($event)"
    [course]="course">
    <app-course-image [src]="course.iconUrl"></app-course-image>
    <div class="course-description">
      {{course.longDescription}}
    </div>
  </app-course-card>
```


* app.component.ts

```typescript
  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;
```

* course-image.component.html

```html
<div class="course-image" #courseImage>
<img width="300" alt="Angular Logo" [src]="imageUrl">
<h5>total lessons: 5</h5>
</div>
```

* course-image.component.ts

```typescript
export class CourseImageComponent implements OnInit {


  @Input('src')
  imageUrl: string;

  constructor() { }

  ngOnInit() {
  }
}
```


> 如上所示，app.component.ts中变量image，被注入了子组件的app-course-image的值


## [代码](https://github.com/qiujiahong/angular-base-examples/tree/ContentChild)


