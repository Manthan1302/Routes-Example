import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slider-child',
  templateUrl: './slider-child.component.html',
  styleUrls: ['./slider-child.component.css']
})
export class SliderChildComponent {
  user!: { id: number, name: string };

  constructor(private router: ActivatedRoute) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.user = {
      id: this.router.snapshot.params['id'],
      name:this.router.snapshot.params['name']
    };
  }
}
