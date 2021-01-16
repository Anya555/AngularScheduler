import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../pages/page-1/homepage/homepage.component';
import { LoginComponent } from '../pages/page-2/login/login.component';
import { AdminDashboardComponent } from '../pages/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AccessForbiddenComponent } from '../pages/access-forbidden/access-forbidden/access-forbidden.component';
import { ContextResolver } from './context-resolver';
import { AdminGuard } from './admin.guard';
import { AppointmentComponent } from '../pages/appointment/appointment/appointment.component';
import { AppointmentResolver } from '../pages/appointment/appointment.resolver';
import { AppointmentConfirmationComponent } from '../pages/appointment-confirmation/appointment-confirmation/appointment-confirmation.component';
import { CancellationConfirmationComponent } from '../pages/cancellation-confirmation/cancellation-confirmation/cancellation-confirmation.component';
import { SignUpComponent } from '../pages/sign-up/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      context: ContextResolver,
    },
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'access-forbidden',
        component: AccessForbiddenComponent,
      },
      {
        path: 'appointment/:id',
        component: AppointmentComponent,
        resolve: {
          appointment: AppointmentResolver,
        },
      },
      {
        path: 'appointment-confirmation',
        component: AppointmentConfirmationComponent,
      },
      {
        path: 'cancellation-confirmation',
        component: CancellationConfirmationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
