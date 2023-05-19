import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../model/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  public getAuthors(): Observable<Array<Author>>{
    return  this.http.get<Array<Author>>("http://localhost:8089/authors/")
  }

  public deleteAuthor(author: Author){
    return this.http.delete<any>(`http://localhost:8089/authors/${author.id}`)
  }

  saveAuthor(author: Author):Observable<Author>{
    return this.http.post<Author>(`http://localhost:8089/authors`,author)
  }

  public searchAuthors(keyword: string): Observable<Array<Author>>{
    return  this.http.get<Array<Author>>(`http://localhost:8089/authors?author_like=${keyword}`);
  }

}

