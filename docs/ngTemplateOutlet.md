# ngTemplateOutlet

上一章节讲述了ng-template指令，但是ng-template中的内容相对固定，为达到复用template的目的，我们期望可以传入参数到ng-template中。


## 代码


* 

```html
  <ng-template #balakImage let-courseName="description">
  <p class="warn">{{courseName}} has no image yet.</p>
  <img src="/assets/empty-image.png" >
  </ng-template>

  <ng-container *ngTemplateOutlet="balakImage; context:{description: course.description}">
  </ng-container>
```


## [完整代码](https://github.com/qiujiahong/angular-base-examples/tree/ngTemplateOutlet)
