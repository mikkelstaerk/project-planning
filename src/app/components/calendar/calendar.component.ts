import { Component, OnInit, Input } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { DayService } from '../../services/day.service';

import { IEmployee } from '../../models/iemployee';
import { IDay } from '../../models/iday';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    employees:Array<IEmployee> = [];
    days:Array<IDay> = [];

  constructor(private employeeService:EmployeeService,
              private dayService:DayService) {

    this.employees = employeeService.getEmployees();
    this.updateDays();


  }


  public updateDays(startDate:Date = new Date()) {
    this.days = this.dayService.getDays(startDate, 28);
  }

  public moveWeeks(weeks:number) {
    let days = 7 * weeks;
    let newStartDate:Date = this.dayService.addDays(this.days[0].date, days);
    this.updateDays(newStartDate);
  }

  ngOnInit() {

  }

}
