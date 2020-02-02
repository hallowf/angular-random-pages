import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(
    private http: HttpClient
  ) { }

  getChuckJoke() {
    return this.http.get('http://api.icndb.com/jokes/random?exclude=[explicit]')
  }

  getJJoke() {
    return this.http.get('https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw,religious.political')
  }

  getOJJoke() {
    return this.http.get('https://official-joke-api.appspot.com/jokes/programming/random')
  }
  
}
