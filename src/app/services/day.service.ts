import { Injectable } from '@angular/core';

import { IDay } from '../models/iday';

@Injectable()
export class DayService {

  constructor() { }


  public getDays(startDate:Date, numberOfDays:number):Array<IDay> {
    let days:Array<IDay> = [];
    for (let i = 0; i < numberOfDays; i++) {
        let day:IDay = {} as IDay;
        day.date = this.addDays(startDate, i);
        day.weekNumber = this.getWeek(day.date);
        day.isWeekend = day.date.getDay() > 5 || day.date.getDay() < 1;
        days.push(day);
    }
    return days;
  }

  public addDays(day, add) {
    var result = new Date(day);
    result.setDate(result.getDate() + add);
    return result;
  }

  public getWeek(date:Date) {
    var date = new Date(date.getTime());
 date.setHours(0, 0, 0, 0);

date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

var week1 = new Date(date.getFullYear(), 0, 4);
return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                      - 3 + (week1.getDay() + 6) % 7) / 7);
  }

}
