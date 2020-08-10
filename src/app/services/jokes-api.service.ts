import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root',
})
export class JokesApiService {
  private API_BASE = 'https://api.chucknorris.io/jokes/';

  constructor(private readonly http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_BASE}/categories`);
  }

  getRandomJoke(category = null): Observable<Joke> {
    const params = new HttpParams();

    if (category) {
      params.append('category', category);
    }

    return this.http.get<Joke>(`${this.API_BASE}/random`, { params });
  }
}
