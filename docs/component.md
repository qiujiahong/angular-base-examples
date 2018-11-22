# 组件

## 创建组件

```angular2
ng g c course-card 
```

> 如上命令创建一个名字为course-card的组建

该命令创建如下文件  

```angular2
src/app/course-card/
├── course-card.component.css       组件的样式文件
├── course-card.component.html      组件的模版文件
├── course-card.component.spec.ts   组件的测试文件
└── course-card.component.ts        组件的逻辑文件
```

* ts文件``@Component``定义了组件引用名字（selector），组件模版，组件style。


```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

```



