import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input( ) pUserName : string = '';

  counter : number = 0;

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

  incrementCounter(){
    this.counter++;
  }

  ngAfterContentInit(){
    console.log('AfterContentInit Triggered');
    
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked Triggered');
    
  }

  ngAfterViewInit() {
    console.log('AfterViewInit Triggered');
    
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked Triggered');
    
  }

  ngOnDestroy(){
    console.log('OnDestroy Triggered');
    
  }
}
