import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  host: {
    '[style.left]': 'this.left',
      '[style.right]': 'this.right'
  }
})


export class BookingComponent implements OnInit {

  @Input('days') days: number;
  @Input('start') start: number;
  @Input('end') end: number;

  left:string = "";
  right:string = "";
  dragging:boolean = false;

  constructor() { }

  updateSize() {
    this.left = (this.start / this.days * 100).toString() + "%";
    this.right = (this.end / this.days *100).toString() + "%";
  }

  public mouseDown(evn) {
    this.dragging = true;
  }

  public mouseUp(evn) {
    this.dragging = false;
  }

  public mouseMove(evn) {
    if(this.dragging) {
      //var percent = evn.clientX - 
      this.start = this.getDay();
      this.updateSize();
    }
  }

  getDay() {
    return 3;
  }

  ngOnInit() {
    this.updateSize();


  }

}
