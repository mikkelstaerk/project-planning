import { Component, OnInit, Input, ElementRef } from '@angular/core';

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

  constructor(private elRef: ElementRef) { }

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

  public mouseMove(evn, left) {
    if(this.dragging) {
      let parentElm = this.elRef.nativeElement.parentElement;
      let parentWidth = parentElm.offsetWidth;
      if(left) {
        let parentLeft = parentElm.getBoundingClientRect().left;
        let percent = (evn.clientX+7 - parentLeft) / parentWidth;
        this.left = ((percent*100)-2).toString() + "%";
      } else {
        let parentRight = parentElm.getBoundingClientRect().right;
        let percent = (evn.clientX-7 - parentRight) / parentWidth;
        this.right = (-((percent*100)+2)).toString() + "%";
       }
    }
  }

  getDay(percent) {
    return Math.floor(this.days * percent);
  }

  ngOnInit() {
    this.updateSize();


  }

}
