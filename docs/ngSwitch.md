# ngSwitch 



```html
  <div class="course-category" [ngSwitch]="course.category">
    <div class="cateory" *ngSwitchCase="'BEGINNER'">Beginner</div>
    <div class="cateory" *ngSwitchCase="'INTERMEDIATE'">Intermediate</div>
    <div class="cateory" *ngSwitchCase="'ADVANCED'">Advanced</div>
    <div class="cateory" *ngSwitchDefault>All Levels</div>
  </div>

```
