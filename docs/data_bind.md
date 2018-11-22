# 数据绑定

## 后端数据显示到前端上

* 后端声明变量

```typescript
export class AppComponent {
  data={
    title: 'Angular'
  };
}
```

* 前端用花括号包含变量名

```html
Hi {{ data.title }}!
```


## 前端数据绑定到后端变量

```html
<input class="demo" [value]="data.title">
```


### 事件

事件函数由()括号包含。  

*  前端代码   
```angular2
  <img  (click)="onClickFun()"  width="300" alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
```

* 后端代码onClickFun函数定义

```angular2
export class AppComponent {
  data={
    title: 'Angular'
  };
  onClickFun(){
    alert("img click.");
  }
}

```



### 数据的双向绑定

* 前端

```html
<div style="text-align:center">
  <h1>
    Hi {{ data.title }}!
  </h1>
  <img  (click)="onClickFun()"  width="300" alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>

<input class="demo"
       (keyup)="onKeyUp(titleInput.value)"
       [value]="data.title"
        #titleInput>
```

* 后端

```typescript
export class AppComponent {
  data={
    title: 'Angular'
  };
  onClickFun(){
    alert("img click.");
  }

  onKeyUp(newTitle :string) {
    this.data.title = newTitle;
  }
}
```


> ``#titleInput``为一个引用模版  
> titleInput.value为改前端元素的value值；

