import { Router, ActivatedRoute } from '@angular/router';
import { AuthServices } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private authServices: AuthServices, private activeRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activeRoutes.fragment.subscribe(
      (data) => {
        console.log(data);
        this.jumpToSection(data!)
      }
    )
  }
  onLogin() {
    this.authServices.login();
  }
  onLogout() {
    this.authServices.logOut();
  }

  jumpToSection(section:string){
    document.getElementById(section)?.scrollIntoView({behavior:'auto'})
  }
}
