# 自定义service


* 使用脚手架工具在services目录下生成CoursesService

```bash
ng g s services/courses
```

* 在需要注入的组件的构造函数内注入，后续可继续使用该服务。

```typescript
export class AppComponent {

  courses$: Observable<Course[]>;

  constructor(private http: HttpClient,
              private coursesService: CoursesService){

  }
  ngOnInit(){

    const params = new HttpParams()
      .set("_page","1")
      .set("_limit","3");
    this.courses$ = this.http.get<Course[]>('/api/courses',{params});
  }
}

```


