import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['Surround yourself with positive people and you’ll be a positive person.', 'It’s almost always possible to be honest and positive.', 'I surround myself with positive, productive people of good will and decency.', 
    ]
  }
}
