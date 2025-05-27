import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TimeoutError } from "rxjs";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterOutlet],
    //in-line html
    // template: `<h1>Navbar Component</h1>
    //             <p>dummy paragraph</p>
    //             <button>Submit</button>`,
    templateUrl: './navbar.component.html',
    //in-line css
    // styles: `h1{
    //     color: red;
    //     background: black
    //     }`,
    styleUrl: './navbar.component.css'
})

export class AppNavbar{}