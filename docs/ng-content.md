# ng-content

## 前言

ng-content能够实现组件内部插入一段html，然后再插入到组件内显示。


## 代码

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


