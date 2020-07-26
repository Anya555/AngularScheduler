import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';

@NgModule({
  declarations: [HomepageComponent, HomepageHeaderComponent],
  exports: [HomepageComponent],
  imports: [CommonModule],
})
export class Page1Module {}
