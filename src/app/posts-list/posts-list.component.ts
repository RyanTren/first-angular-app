import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { JsonPipe } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-posts-list',
  imports: [CardComponent, JsonPipe, UserComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  //  @Input() postListTitle : string = '';
  //  @Input() postIsLogin: boolean = false;
  // childMessage: string = 'Hello from Child Component';
  // postCount: number = 0;
  // parentMessage: string = 'Message from the Child using click event';

  // @Output() MessageEvent = new EventEmitter();

  // sendMessage(){
  //   console.log('button Clicked');
  //   this.MessageEvent.emit(this.parentMessage);
  // }

  // angular services
  @Input() childUser: any;
  userService:any;

  constructor(){
    this.userService = new UserService()
  }
}
