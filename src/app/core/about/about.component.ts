import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';    
import { Router } from '@angular/router';     
import { DataService } from '../services/data.service';

@Component({
  selector: 'appSqFt-about',
  templateUrl: '../about/about.component.html',
  styleUrls: ['../about/about.component.scss']
})
export class AboutComponent implements OnInit {

goals: any;

  constructor(private route: ActivatedRoute,private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));
  }
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
       
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
  
}
