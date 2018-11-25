# 内嵌pips


## 前言

pip用来转换数据，常用的pip有。


* date pip 
* 字符串相关pip，uppercase,lowercase,titlecase
* 数字相关 number,currency,percent
* 数组 slice
* 其他 json 


## data pip 

* 后端变量  

```typescript
startDate = new Date(2018,12,1);
```

* 直接显示

```html
<div class="demo">
  Start Date: {{startDate}}
</div>
```

```html
Tue Jan 01 2019 00:00:00 GMT+0800 (中国标准时间)
```

*  date pip ``{{startDate | date }}``

```html
Start Date: Jan 1, 2019

```

* 更多用法,``startDate = new Date(2018,12,1);``

  * ``{{startDate | date }}`` - `` Jan 1, 2019``
  * ``{{startDate | date: 'MM/dd/yyyy' }}`` - ``01/01/2019``
  * ``{{startDate | date: 'MM/dd/yy' }}`` - ``01/01/19``
  * ``{{startDate | date: 'MMM/dd/yy' }}`` - ``Jan/01/19``
  
## 字符串相关pip 

* {{title| uppercase}},全部大写
* {{title| lowercase}},全部小写
* {{title| titlecase}},首字母大写

## 数字相关


* ``{{price| number: '3.4-5'}}`` price显示的时候 ，小数点左边最少3个数字，小数点右边做最少4个数字，最多5个数字。如定义睡着9.9则显示数字为``009.9900``

* ``{{price| currency }}`` 默认是美元，如上9.9显示结果是``$9.99``
  * ``{{price| currency: 'EUR' }}``  - €9.99
  
*  ``{{rate| percent }}``    - 85%



## 数组相关

* 如下所示slice:0:2表示，显示循环内第0～1条记录（不包括第二条记录）。

```html
  <app-course-card *ngFor="let course of courses| slice:0:2;index as i; first as isFirst; last as isLast;
                    even as isEven; odd as isOdd"
                   [course]="course" [cardIndex]="i+1"></app-course-card>
```


## 其他


* {{courses | json }}  显示courses对象为json格式

* keyvalue 访问对象对key volue 

```html
<div *ngFor="let pair of course | keyvalue">
  {{pair.key + ':' + pair.value }}
</div>
```
