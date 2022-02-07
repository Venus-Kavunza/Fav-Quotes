import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [ 
    {quote:'I surround myself with positive, productive people of good will and decency.', arthur:'Ted Nugent', name:'Venus Mwende'},
    {quote:'Keep your face to the sunshine and you cannot see a shadow.', arthur:'Helen Keller', name:'Venus Mwende'},
    {quote:'The positive thinker sees the invisible, feels the intangible, and achieves the impossible.', arthur:'Winston Churchill', name:'Venus Mwende'}
  ]
}
