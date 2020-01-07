import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // the selector identifies the component. The selector is the name you give the Angular component when it is rendered as a HTML element on the p
  // age. => and imo is how will you target it.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * a class which handles functionality for the component
 */
export class AppComponent {
  title = 'myFirstApp';
}
