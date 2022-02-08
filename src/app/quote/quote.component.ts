import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [ 
    new Quote ('I surround myself with positive, productive people of good will and decency.', 'Ted Nugent', 'Venus Mwende', 'First Quote', new Date(2022,1,5)  ),
    new Quote ('Keep your face to the sunshine and you cannot see a shadow.', 'Helen Keller', 'Venus Mwende', 'Second Qoute', new Date(2022,1,10)),
    new Quote ('The positive thinker sees the invisible, feels the intangible, and achieves the impossible.', 'Winston Churchill', 'Venus Mwende', 'Third Quote', new Date(2022,1,29))
  ]

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete ${this.quotes{index}.name}?')

      if (toDelete){
      this.quotes.splice(index,1);
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
