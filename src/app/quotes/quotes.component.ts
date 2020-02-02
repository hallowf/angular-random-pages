import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  private quotes = []

  constructor(private service: QuotesService) {
    
  }

  clearJokes(): void {
    this.quotes = []
  }

  fetchJokes(): void {
    this.service.getChuckJoke().subscribe((data) => {
      this.quotes.push(data['value']['joke'])
    })
    this.service.getJJoke().subscribe((data)=> {
      this.quotes.push(data['joke'])
    })
    this.service.getOJJoke().subscribe((data) => {
      this.quotes.push(data[0]['setup'] + ' ' + data[0]['punchline'])
    })
  }

  ngOnInit() {
  }

}
