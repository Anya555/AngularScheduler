import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [CommonModule, FormsModule],
  exports: [AdminDashboardComponent],
})
export class AdminDashboardModule {}
