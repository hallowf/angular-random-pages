import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  jokes = []

  constructor(private service: QuotesService) {
    
  }

  clearJokes(): void {
    this.jokes = []
  }

  fetchJokes(): void {
    this.service.getChuckJoke().subscribe((data) => {
      this.jokes.push(data['value']['joke'])
    })
    this.service.getJJoke().subscribe((data)=> {
      this.jokes.push(data['joke'])
    })
    this.service.getOJJoke().subscribe((data) => {
      this.jokes.push(data[0]['setup'] + ' ' + data[0]['punchline'])
    })
  }

  ngOnInit() {
  }

}
