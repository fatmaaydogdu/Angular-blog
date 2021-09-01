import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo:any = JSON.stringify(JSON.parse(localStorage.getItem('userInfo')))
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('userInfo')))
  }

}
