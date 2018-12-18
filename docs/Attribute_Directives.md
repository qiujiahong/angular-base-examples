# Attribute Directives

## 前言

```html
<<input disabled required>
``` 

如上所示的disabled和required为不带值的属性指令。本文学习怎么自定义一个angular自定义属性指令。

## 操作步骤

### 添加一个自定义directive 

* 执行命令

```bash
ng g directive directives/highlighted
```

* 修改highlighted.directive.ts指令文件

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor() {
    console.log("directive created")
  }

}
```

* 前端显示加上属性指令

```html
  <app-course-card appHighlighted
    (courseSelected)="onCourseSelected($event)"
    [course]="course">
    <app-course-image [src]="course.iconUrl"></app-course-image>
    <div class="course-description">
      {{course.longDescription}}
    </div>
  </app-course-card>
```


* 运行程序，可以看到控制台打印了```directive created``对应的指令被创建


### 使用directive 修改样式

* styles.css

```css
.highlighted {
  box-shadow: 0 2px 16px 0 #de1e19, 0 3px 8px 0 rgba(226, 21, 19, 0.47), 0 6px 8px -1px #b41c18;
}
```

* app.component.html文件下app-course-card组件加上appHighlighted属性。

```html
  <app-course-card appHighlighted
    (courseSelected)="onCourseSelected($event)"
    [course]="course">
    <app-course-image [src]="course.iconUrl"></app-course-image>
    <div class="course-description">
      {{course.longDescription}}
    </div>
  </app-course-card>
```


* highlighted.directive.ts,下添加HostBinding


```typescript
   @HostBinding('class.highlighted')
   get cssClasses(){
     return true;
   }

  // @HostBinding('className')
  // get cssClasses(){
  //   return "highlighted";
  // }

  //@HostBinding('style.border')
  //get cssClasses(){
  //  return "1px solid red";
  //}
```

* 此操作之后，边框产生一个阴影

### 使用指令属性值控制显示

* app.component.html修改``[appHighlighted]="true"``

```html
 <app-course-card [appHighlighted]="true"
    (courseSelected)="onCourseSelected($event)"
    [course]="course">
    <app-course-image [src]="course.iconUrl"></app-course-image>
    <div class="course-description">
      {{course.longDescription}}
    </div>
  </app-course-card>
```

* highlighted.directive.ts

```typescript
@Input('appHighlighted')
  isHighlighted = false;

  constructor() {
    console.log("directive created")
  }

  @HostBinding('class.highlighted')
  get cssClasses(){
    return this.isHighlighted;
  }
```

### 事件

* highlighted.directive.ts

```typescript
import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input('appHighlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight= new EventEmitter();

  constructor() {
    console.log("directive created")
  }

  @HostBinding('class.highlighted')
  get cssClasses(){
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled(){
    return "true";
  }

  @HostListener('mouseover',['$event'])
  mouseOver($event){
    console.log($event);
    this.isHighlighted=true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

}

```


* app.component.html

```html
<div appHighlighted class="top-menu">
  <img class="logo"
       src="https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png">
</div >


<div class="courses" *ngIf="courses[0] as course">


  <app-course-card [appHighlighted]="false"
                   (toggleHighlight)="onToggle($event)"
    (courseSelected)="onCourseSelected($event)"
    [course]="course">
    <app-course-image [src]="course.iconUrl"></app-course-image>
    <div class="course-description">
      {{course.longDescription}}
    </div>
  </app-course-card>

</div>
```

### 其他用法,设置attr

```typescript
  @HostBinding('attr.disabled')
   get disabled(){
     return "true";
   }
```

## [完整代码](https://github.com/qiujiahong/angular-base-examples/tree/attribute_directives)

