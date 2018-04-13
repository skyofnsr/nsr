import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appSqFt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  isCollapsed = true;
  subModules = [
    {
      menuName: "Home",
      subMenuName: 0,
      routerLink: ""
    },
    {
      menuName: "ReAdmin",
      subMenuName: 0,
      routerLink: "user/28"
    },{
      menuName: "ReAdmin",
      subMenuName: "City Master",
      routerLink: "user/28"
    },{
      menuName: "ReAdmin",
      subMenuName: "City Master",
      routerLink: "user/28"
    },{
      menuName: "ReAdmin",
      subMenuName: "City Master",
      routerLink: "user/28"
    },{
      menuName: "ReAdmin",
      subMenuName: "City Master",
      routerLink: "user/28"
    },
    {
      menuName: "Search",
      subMenuName: 0,
      routerLink: "about/50"
    },
    {
      menuName: "AccessDelegation",
      subMenuName: "City Master",
      routerLink: ""
    },
    {
      menuName: "BookIt",
      subMenuName: 0,
      routerLink: "user/28"
    },
    {
      menuName: "TeamView",
      subMenuName: 0,
      routerLink: "user/28"
    },
    {
      menuName: "Help",
      subMenuName: 0,
      routerLink: "user/28"
    }
  ];
  sIndex: number = 0;

  constructor() { }
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  setIndex(index: number) {
       this.sIndex = index;
 }
  

 myEvent(event) {
  console.log(event);
}

  ngOnInit() {
  }

}
