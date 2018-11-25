# ngClass



## 前言

本文讲解如何使用angular中的ngClass给元素动态的指定样式。

我们使用ngClass传递样式的方法如下：

* 使用字符串传递；
* 使用数组传递；
* 使用对象传递；
* 使用函数传递


## 使用方法

* 准备样式

```css
/*同时有.course-card和.beginner样式的元素*/
.course-card.beginner{
  background: lightsalmon;
}

```

### 使用字符串传递

```html
<div class="course-card"
  [ngClass]="'beginner'" >
  <!-- 省略 -->
</div>
```

同时，我们也可以使用字符串传递多个css样式

```html
<div class=""
  [ngClass]="'course-card beginner'" >
  <!-- 省略 -->
</div>

```

### 使用数组传递样式

```html
<div class=""
     [ngClass]="['course-card','beginner']" >
  <!-- 省略 -->
</div>

```

### 配置对象传递样式

```html
<div class=""
     [ngClass]="{'course-card':true,'beginner':true}" >
  <!-- 省略 -->
</div>
```

如上所示对象key值是样式名字，对象值是true或者false，代表是否使用该样式


### 使用函数传递样式


* 模版代码

```html
<div class=""
     [ngClass]="cardClasses()" >
  <!-- 省略 -->
</div>
```

* 逻辑函数

```typescript
  cardClasses() {
     // return {'beginner': this.course.category=='BEGINNER'};
     if(this.course.category=='BEGINNER'){
       return ['beginner']
     }
   }
```

