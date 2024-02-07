import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})
export class EditCartComponent {

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
  }
}
