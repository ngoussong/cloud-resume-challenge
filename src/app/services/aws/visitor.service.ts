import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getVisitorCount(): Observable<any> {
    return this.httpClient.post("https://nc9v6nihx9.execute-api.eu-central-1.amazonaws.com/test/visitCounter", null)
  }
}
