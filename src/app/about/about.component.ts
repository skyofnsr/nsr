import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';    
import { Router } from '@angular/router';     
import { DataService } from '../data.service';

@Component({
  selector: 'appSqFt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

goals: any;
pushRightClass: string = 'sidebar-mini';

  constructor(private route: ActivatedRoute,private router: Router, private _data: DataService) { 
    const dom: any = document.querySelector('body');
    dom.classList.add('fixed-navbar');
    
    this.route.params.subscribe(res => console.log(res.id));
  }
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
       
  }

  toggleSidebar(){
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }
  sendMeHome() {
    this.router.navigate(['']);
  }
  
}
