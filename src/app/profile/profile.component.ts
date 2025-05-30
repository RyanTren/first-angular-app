import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck {

  @Input( ) pUserName : string = '';

  constructor(){
    console.log('Constructor Method Triggered');
    console.log(this.pUserName);
  }

  ngOnChanges() {
    console.log('OnChanges Triggered');
    console.log(this.pUserName);
    
  }

  ngOnInit(){
    console.log('NgOnInit Triggered');
    console.log(this.pUserName);
    
  }

  ngDoCheck() {
    console.log('NgDoCheck Triggered');
    
  }
}
