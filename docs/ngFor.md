# ngFor

## 前言

本文讲解如何使用ngFor改造原有项目，实现循环。


## 使用方法

* 循环并且给每个元素加上一个序号

```html
  <app-course-card *ngFor="let course of courses;index as i;"
                   [course]="course" [cardIndex]="i+1"></app-course-card>
```


* 判断第一个、最后一个组件、偶数、奇数个组件，并且加上对应样式；

```html
  <app-course-card *ngFor="let course of courses;index as i; first as isFirst; last as isLast;
                    even as isEven; odd as isOdd"
                   [class.is-first]="isFirst"
                   [class.is-last]="isLast"
                   [class.is-even]="isEven"
                   [class.is-odd]="isOdd"
                   (courseSelected)="onCouseSelected($event)"
                   [course]="course" [cardIndex]="i+1"></app-course-card>
```


* index: number：可迭代对象中当前条目的索引。

* first: boolean：如果当前条目是可迭代对象中的第一个条目则为 true。

* last: boolean：如果当前条目是可迭代对象中的最后一个条目则为 true。

* even: boolean：如果当前条目在可迭代对象中的索引号为偶数则为 true。

* odd: boolean：如果当前条目在可迭代对象中的索引号为奇数则为 true。
