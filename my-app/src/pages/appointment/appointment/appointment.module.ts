import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';

@NgModule({
  declarations: [AppointmentComponent],
  exports: [AppointmentComponent],
  imports: [CommonModule],
})
export class AppointmentModule {}
