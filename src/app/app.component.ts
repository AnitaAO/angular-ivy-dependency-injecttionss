import { Component } from '@angular/core';
import { coursesService } from './courses.service';

@Component({
  selector: 'app-root',
  template: 
  `
    <h1>{{ title }}</h1>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "Getting better now!";
  courses;

  constructor(service: coursesService){
    this.courses = service.getCourses();
  }
}
