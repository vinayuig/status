import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class incidentsService {
  private apiUrl = 'https://status.controlup.com/api/v2/incidents.json'; // API endpoint

  constructor(private http: HttpClient) { }

  getIncidents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
