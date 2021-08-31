import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) {
  }

  getTest() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1', );
  }

  signup(data: any) {
    return this.httpClient.post('http://localhost:3000/users', data);
  }

  
}
