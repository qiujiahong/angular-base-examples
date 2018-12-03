# ViewChild指令

使用ViewChild指令，我们可以直接在父组件的逻辑代码中直接访问子组件的内容。



## 根据类型推导

如下所示，在app.component.ts钟，我们定义了使用ViewChild注解的变量，并且指定类型CourseCardComponent。  
这样我么可以在后端ts代码中访问该子组件


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

> 这样编码存在一个问题，当app.component.html钟存在多个该子组件的时候，这种方法获取到的一直是第一个组件。


## 使用引用模版


```html
  <app-course-card
    (courseSelected)="onCourseSelected($event)"
                   [course]="courses[0]"  #cardRef1  ></app-course-card>
  <app-course-card
    (courseSelected)="onCourseSelected($event)"
                   [course]="courses[1]" #cardRef2 ></app-course-card>
```


```typescript
 // @ViewChild(CourseCardComponent)
  // card: CourseCardComponent;
  @ViewChild('cardRef1')
  card1: CourseCardComponent;
  @ViewChild('cardRef2')
  card2: CourseCardComponent;

  onCourseSelected(course: Course){
    console.log(this.card1);
    
    console.log(this.card2);

    console.log(course);
  }
```

