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

  constructor() { }

  ngOnInit() {
    this.left = (this.start / this.days * 100).toString() + "%";
    this.right = (this.end / this.days *100).toString() + "%";

  }

}
