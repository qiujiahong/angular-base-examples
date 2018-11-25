# ngStyle 


本文讲解如何如何使用ngStyle指令

## 原生的style

```html
  <div class="course-title" [style.text-decoration]="'underline'">
  {{cardIndex + ' ' +course.description}}
  </div>
```
> 注意上面双引号内有单引号

## 使用ngStyle定义多个属性

```html
  <div class="course-title" [ngStyle]="{'text-decoration':'underline'}">
  {{cardIndex + ' ' +course.description}}
  </div>
```

## 使用函数传递style


*  模版   

```html
  <div class="course-title" [ngStyle]="cardStyles()">
  {{cardIndex + ' ' +course.description}}
  </div>
```

* 逻辑

```typescript
  cardStyles() {
    return {'text-decoration':'underline'};
  }
```
