import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-slider-observable',
  templateUrl: './slider-observable.component.html',
  styleUrls: ['./slider-observable.component.css']
})
export class SliderObservableComponent implements OnInit {
 path = 'c..jpg';
  paths = [
   'a.jpg',
   'b.jpg',
   'c.jpg',
   'd.jpg'
 ];
 sliderObservable = new Observable<string>(
   (observer) => {
     let i = 0;
     setInterval(
       () => {
        if (i === this.paths.length){
          i = 0;
        }else {
          observer.next(this.paths[i++]);
        }
       },1500
     );

   }
 );
  constructor() { }

  ngOnInit(): void {
    this.sliderObservable.subscribe(
      (path) => this.path = path
    );
  }

}
