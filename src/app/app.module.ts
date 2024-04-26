import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MonthDatePickerComponent } from './month-date-picker/month-date-picker.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthDatePickerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
