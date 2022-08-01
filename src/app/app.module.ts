import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { coursesService } from './courses.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CoursesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ coursesService]
})
export class AppModule { }
