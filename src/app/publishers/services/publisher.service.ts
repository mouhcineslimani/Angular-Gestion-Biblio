import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  private apiUrl = 'http://api.example.com/publishers'; 

  constructor(private http: HttpClient) { }

  getPublishers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPublisher(publisher: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, publisher);
  }

  updatePublisher(publisher: any): Observable<any> {
    const url = `${this.apiUrl}/${publisher.id}`;
    return this.http.put<any>(url, publisher);
  }

  deletePublisher(publisherId: number): Observable<any> {
    const url = `${this.apiUrl}/${publisherId}`;
    return this.http.delete<any>(url);
  }
}
