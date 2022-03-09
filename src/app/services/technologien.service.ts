import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Technologie } from '../technologie';


@Injectable({
  providedIn: 'root'
})
export class TechnologienService {

  private baseUrl = "http://localhost:4566/technologies";
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getAllTechnologies(): Observable<Technologie[]> {
    return this.http.get<Technologie[]>(this.baseUrl);
  }
  
  getAllTechnologiesFromKategorie(kategorie: string): Observable<Technologie[]> {
    if (!kategorie.trim()) {
      return of([]);
    }
    const url = `${this.baseUrl}/${kategorie}`
    return this.http.get<Technologie[]>(url);
  }

  getAllPublishedTechnologiesFromKategorie(kategorie: string): Observable<Technologie[]> {
    if (!kategorie.trim()) {
      return of([]);
    }
    const url = `${this.baseUrl}/${kategorie}/published`
    return this.http.get<Technologie[]>(url);
  }

  addTechnologie(technologie: Technologie): Observable<Technologie> {
    return this.http.post<Technologie>(this.baseUrl, technologie, this.httpOptions);
  }

  deleteTechnologie(id: string): Observable<Technologie> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Technologie>(url, this.httpOptions);
  }

  updateTechnologie(technologie: Technologie): Observable<any> {
    const url = `${this.baseUrl}/${technologie._id}`;
    return this.http.put(url, technologie, this.httpOptions);
  }

}
