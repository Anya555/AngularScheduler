import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Page1Module } from '../pages/page-1/page-1.module';
import { Page2Module } from '../pages/page-2/page-2.module';
import { NavbarModule } from '../pages/navbar/navbar.module';
import { AdminDashboardModule } from '../pages/admin-dashboard/admin-dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { AccessForbiddenModule } from '../pages/access-forbidden/access-forbidden.module';
import { AppContext } from './context';
import { AdminGuard } from './admin.guard';
import { AppointmentModule } from '../pages/appointment/appointment/appointment.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Page1Module,
    Page2Module,
    NavbarModule,
    HttpClientModule,
    AdminDashboardModule,
    AccessForbiddenModule,
    AppointmentModule,
  ],
  exports: [],
  providers: [AppContext, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
