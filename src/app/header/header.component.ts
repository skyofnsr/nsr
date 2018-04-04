import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appSqFt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  isCollapsed = true;

  constructor() { }
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
