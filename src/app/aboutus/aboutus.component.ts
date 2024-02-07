import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  name!:string;
  onClick() {
    // this.router.navigate(['/about'],{relativeTo:this.route})
    this.router.navigate(['/about'], { queryParams: { addItem: 3 }, fragment: "loadiung" })
  }

  users = [
    {
      id: 1,
      name: 'xyz',
    },
    {
      id: 2,
      name: 'man',
    }
  ]

}
