import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  getTest() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1', );
  }

  login(data: any) {
    console.log(data)
    return this.httpClient.post('http://localhost:3000/users?email=test@msn.com&password=asdsadsadsadsa', data);
    
  }

  
}