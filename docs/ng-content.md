# ng-content

## 前言

ng-content能够实现组件内部插入一段html，然后再插入到组件内显示。


## 代码

### 基础用法

* app.component.html

```html
<div class="courses" *ngIf="courses[0] as course">
  <app-course-card
    (courseSelected)="onCourseSelected($event)"
    [course]="course">
    <img width="300" alt="Angular Logo" [src]="course.iconUrl">
  </app-course-card>
</div>
```

* course-card.component.html,把如下代码复制在组件中需要显示的位置即可。

```html
 <ng-content></ng-content>
```

### 多段分别插入

组件内包含多段html代码，要分别插入到组件中不同位置。

* app.component.html  

```html
  <app-course-card
    (courseSelected)="onCourseSelected($event)"
    [course]="course">
    <div class="course-image">
      <img width="300" alt="Angular Logo" [src]="course.iconUrl">
    </div>
    <div class="course-description">
      {{course.longDescription}}
    </div>
    Edit: <textarea ></textarea>
  </app-course-card>
```

* course-card.component.html  


```html
  <ng-content select=".course-image"></ng-content>

  <ng-content select=".course-description"></ng-content>
  <ng-content ></ng-content>
```




