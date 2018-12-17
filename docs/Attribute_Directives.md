# Attribute Directives

## 前言

```html
<<input disabled required>
``` 

如上所示的disabled和required为不带值的属性指令。本文学习怎么自定义一个angular自定义属性指令。

## 操作步骤

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


## [完整代码]()

