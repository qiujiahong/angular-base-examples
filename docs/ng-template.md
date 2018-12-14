# ng-template

## 前言

本文讲解ng-template的使用。  
ng-template代表一个代码块，可以在angular中被其他地方引用。


## 代码

* course-card.component.html  

```html
  <ng-template #balakImage>
    <p class="warn">{{course.description}} has no image yet.</p>
    <img src="/assets/empty-image.png" >
  </ng-template>

  <ng-content select="app-course-image"
              *ngIf="course.iconUrl; else balakImage"></ng-content>
```




## [完整代码](https://github.com/qiujiahong/angular-base-examples/tree/ng-template)
