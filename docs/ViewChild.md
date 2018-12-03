# ViewChild指令

使用ViewChild指令，我们可以直接在父组件的逻辑代码中直接访问子组件的内容。




```html
  <app-course-card
    (courseSelected)="onCourseSelected($event)"
                   [course]="courses[0]"   ></app-course-card>
```

```typescript 
  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  onCourseSelected(course: Course){
    console.log(this.card);
    this.card.course.description="hello";
  }
```

