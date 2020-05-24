import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    <h2> {{ getTitle() }} </h2>
    <ul>
      <li *ngFor="let course of courses ">
        {{ course }}
      </li>
    </ul>
    <h4> Bubble up Event <h4>
    <div (click)="onDivClicked($event)">
      <button class="btn btn-primary" (click)="onButtonClicked($event)">Save</button>
    </div>
    <h4> Two way binding <h4>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title: string;
  courses: any[];
  email = "test@domain.com";

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit(): void {
    this.title = 'Hello World!';
  }

  getTitle() {
    return this.title;
  }

  onDivClicked($event) {
    console.log("Div clicked ", $event);
  }

  onButtonClicked($event) {
    event.stopPropagation();
    console.log("Button clicked ", $event);
  }

  onKeyUp() {
    console.log('Enter Pressed ', this.email);
  }

}
