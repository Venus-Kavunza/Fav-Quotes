import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [ 
    new Quote ('I surround myself with positive, productive people of good will and decency.', 'Ted Nugent', 'Venus Mwende', 'First Quote'),
    new Quote ('Keep your face to the sunshine and you cannot see a shadow.', 'Helen Keller', 'Venus Mwende', 'Second Qoute'),
    new Quote ('The positive thinker sees the invisible, feels the intangible, and achieves the impossible.', 'Winston Churchill', 'Venus Mwende', 'Third Quote')
  ]

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete:any, index:any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
