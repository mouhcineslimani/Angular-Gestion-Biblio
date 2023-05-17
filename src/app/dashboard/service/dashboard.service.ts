import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../models/Date';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  // calling of api ( nodejs )

  getData() {
    return this.http.get<Data[]>(
      'http://localhost:9000/biblio/publishers/statistics'
    );
  }

  getAuthorsCount() {
    return this.http.get<[]>('http://localhost:9000/biblio/authors');
  }

  getDocumentsCount() {
    return this.http.get<[]>('http://localhost:9000/biblio/documents');
  }

  getPublishersCount() {
    return this.http.get<[]>('http://localhost:9000/biblio/publishers');
  }
}
