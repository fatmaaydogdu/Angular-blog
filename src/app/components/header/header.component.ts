import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  constructor() { }

  exit() {
    if (this.userInfo) {
      localStorage.removeItem('userInfo');
      location.reload();
    }

  }

  ngOnInit(): void {
    console.log(this.userInfo);
  }

}
