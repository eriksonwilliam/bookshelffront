import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(`${environment.api}livro/`);
  }
}
