import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FrontpageViewComponent } from './components/frontpage-view/frontpage-view.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BookingComponent } from './components/booking/booking.component';


import { EmployeeService } from './services/employee.service';
import { DayService } from './services/day.service';
const appRoutes: Routes = [
  { path: 'calendar',      component: CalendarViewComponent },
  { path: '**', component: FrontpageViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontpageViewComponent,
    CalendarViewComponent,
    CalendarComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, DayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
