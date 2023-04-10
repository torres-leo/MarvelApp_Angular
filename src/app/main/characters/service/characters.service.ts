import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Character, MainCharacters } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  api_url: string = environment.baseUrl;

  getCharacters(offset: number, pages: number): Observable<MainCharacters> {
    const params = new HttpParams()
      .set('offset', offset * pages)
      .set('limit', 20);

    const url: string = `${this.api_url}/characters`;
    return this.http.get<MainCharacters>(url, { params });
  }
}
