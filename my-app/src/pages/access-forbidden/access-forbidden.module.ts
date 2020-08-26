import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';

@NgModule({
  declarations: [AccessForbiddenComponent],
  exports: [AccessForbiddenComponent],
  imports: [CommonModule],
})
export class AccessForbiddenModule {}
