# ngIf指令

## 前言

本文介绍如何使用ngIf指令



## 操作步骤

### 异常不显示

在上一章的列子中，如果图片的url不存在，则会出现页面显示不正常的情况； 为了解决如上问题。我们修改前端代码。使如果没有图片则不显示该元素

* 开始  

```html
  <img width="300" alt="Angular Logo" *ngIf="course.iconUrl"
       [src]="course.iconUrl">
```

* 修改后   
```html
  <img width="300" alt="Angular Logo" *ngIf="course.iconUrl"
       [src]="course.iconUrl">
```


> ngIf中也可以使用函数来控制元素是否显示；


### else 

```html
  <img width="300" alt="Angular Logo" *ngIf="course.iconUrl; else noImage"
       [src]="course.iconUrl">

  <ng-template #noImage >
    <p>no image is available.</p>
  </ng-template>
```
