import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'first-angular-app';
  imgURL: string = 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ea5e4fa4ba1531cce640_46.png';
  isDisabled: boolean = true;
  isActive: boolean = false;
  fruitName: string = 'Apple';
}
