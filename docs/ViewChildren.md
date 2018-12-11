# ViewChildren


##  前言

ViewChildren指令和ViewChild功能类似，只是该指令针对的是同一类型的一组组件。


## 代码

* 前端代码


```html
<div class="courses"  #container>

  <app-course-card *ngFor="let course of courses"
                   (courseSelected)="onCourseSelected($event)"
                    [course]="course">
  </app-course-card>

</div>

```


* ts代码  
```typescript
export class AppComponent implements AfterViewInit{
  courses = COURSES;

  @ViewChildren(CourseCardComponent)
  cards : QueryList<CourseCardComponent>;


  onCourseSelected(course: Course){
    console.log("hello");
  }

  constructor(private coursesService: CoursesService){
  }
  ngOnInit(){

  }

  ngAfterViewInit(): void {
    console.log(this.cards)
  }
}
```


## QueryList.changes.subscribe

* 如下代码，当cards值发生变化的时候，则会触发该函数执行


```typescript
this.cards.changes.subscribe(
      cards => console.log(cards)
    )
```

## 使用ViewChildren获取Dom对象


```typescript
  @ViewChildren(CourseCardComponent,{read: ElementRef})
  cards : QueryList<ElementRef>;
```


## [完整代码](https://github.com/qiujiahong/angular-base-examples/tree/ViewChildren)

