import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aboutcompany',
  templateUrl: './aboutcompany.component.html',
  styleUrls: ['./aboutcompany.component.css']
})
export class AboutcompanyComponent {

  user!: { id: number, name: string };
  paramsSubscription!: Subscription;
  data:string | null="";
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    
    this.paramsSubscription=this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

    this.data=this.route.snapshot.queryParamMap.get('addItem')
    console.log(this.data);
    
  }
  
  ngOnDestroy(){
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSubscription.unsubscribe();
  }
}
