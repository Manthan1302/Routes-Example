import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {
  errorMessage:string="";
  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.errorMessage=this.activatedRoute.snapshot.data['message'];
    // this.activatedRoute.data.subscribe(
    //   (data:Data)=>{
    //     this.errorMessage=data['message'];
    //   }
    // )
  }
}
