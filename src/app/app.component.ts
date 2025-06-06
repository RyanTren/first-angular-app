import { Component, Input, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, NgClass, NgComponentOutlet, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardComponent } from "./card/card.component";
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from "./user/user.component";
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, NgIf, NgFor, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault,
    NgStyle, NgClass, PostsListComponent, CardComponent, NgComponentOutlet, ProfileComponent, UpperCasePipe, LowerCasePipe,
    TitleCasePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe, JsonPipe, SlicePipe, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent{
  // title: string = 'first-angular-app';
  // imgURL: string = 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ea5e4fa4ba1531cce640_46.png';
  // isDisabled: boolean = true;
  // isActive: boolean = false;
  // fruitName: string = 'Apple';

  // userName: string = 'John Doe';
  // textValue: string = 'Value is coming from component';


  // buttonClick(){
  //   console.log("Button Clicked");
  // }

  // keyEnter(event:any){
  //   console.log(event.keyCode);
  //   if(event.keyCode == 13){
  //     console.log('Enter Key Pressed')
  //   }
  // }

  // keyupFiltering(user:HTMLInputElement){
  //   console.log(user.id);
  // }

  // updateUserName(username:HTMLInputElement){
  //   this.userName = username.value;
  //   console.log(this.userName);
  // }

  // onKeyup(){
  //   console.log(this.textValue);
  // }

  // isLoggedIn:boolean = false;
//   userName:string = 'John Doe';

//   isAdmin:boolean = true;
//   isMember: boolean = true;
//   isGuest: boolean = false;

//   loginCount: number = 0;
  
//   userRole: string = "Member";

// countLoginAttempts(){
//   this.loginCount++;
//   console.log(this.loginCount);
// }

// users: Array<string> = ['John', 'Ryan', 'Bob', 'Jill'];

//   usersObj: Array<any> = [
//     { id: 1, name: 'John', email: 'john@gmail.com'},
//     { id: 2, name: 'Ryan', email: 'ryan@gmail.com'},
//     { id: 3, name: 'Bob', email: 'bob@gmail.com'},
//     { id: 4, name: 'Jill', email: 'jill@gmail.com'},
//   ];

//   constructor(){
//     console.log(this.usersObj.length);
    
//   }

//   addNewUser(){
//     let user = {id: 5, name: 'User 1', email: 'user1@gmail.com' };
//     this.usersObj.push(user);
//   }

  // onDelete(user: object){
  //   let index = this.usersObj.indexOf(user);
  //   console.log(index);
  //   this.usersObj.splice(index, 1);
  // }

//   onDelete(index: number){
//     this.usersObj.splice(index, 1);
//   }


//   userRole: string = '';

// appPostTitle: string = 'Post 1';
// appIsLogin: boolean = false;


// }


// Child to Parent Data Flow @ViewChild Lesson
// export class AppComponent implements AfterViewInit{
//   @ViewChild(PostsListComponent) childMessage: any;
//   message: string = '';

//   messageFromChild: string = '';

//   constructor(){
//   console.log(this.childMessage);

//   }

//   ngAfterViewInit(): void {
//     console.log(this.childMessage);
//     this.message = this.childMessage.childMessage;
// }

//   reciveMessage(message: string){
//     console.log(message);
//     this.messageFromChild = message;
//   }

// }

export class AppComponent{
  
  // username : string = 'John Doe';

  // constructor (private viewContainer: ViewContainerRef){
    
  // }

  // loadComponent(){
  //   this.viewContainer.createComponent(PostsListComponent);
  //   console.log('added post lists Component');
    
  // }
  // removeComponent(){
  //   this.viewContainer.remove();
  //       console.log('removed post lists Component');

  // }

  // changeUser(){
  //   this.username = 'John Smith';
  // }

  // loadComponents(){
  //   this.viewContainer.createComponent(ProfileComponent);
  // }

  // angular pipes
  // title: string = 'angular app';

  // constructor(){
    
  // }
  
  // uppercase(){
  //   this.title = this.title.toUpperCase();
  // }

  // today = new Date();

  // user: any = {
  //   name: 'John',
  //   age: 18,
  //   email: 'john@doe.com'
  // }

  // convertJSON(){
  //   this.user = JSON.stringify(this.user);
  // }

  // angular services
  
  userService: any;


  constructor(){
    this.userService = new UserService();
    console.log(this.userService);
    
  }
}
