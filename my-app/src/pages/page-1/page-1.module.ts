import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ApiModule } from '../../utils/api/api.module';

@NgModule({
  declarations: [HomepageComponent, HomepageHeaderComponent],
  exports: [HomepageComponent],
  imports: [CommonModule, FormsModule, NgbModule, ApiModule],
  bootstrap: [HomepageComponent],
})
export class Page1Module {}
