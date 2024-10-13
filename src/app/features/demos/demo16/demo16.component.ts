import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html',
  styleUrl: './demo16.component.scss'
})
export class Demo16Component {
  response: any
  
  constructor(public readonly nav: NavigateService ,private http: HttpClient) {}

  storeToken() {
    // Stocker un faux token pour la démo
    localStorage.setItem('authToken', 'demoToken123')
  }


  makeRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((res) => {
      this.response = res
      console.log('Response:', res)
    })
  }
}
