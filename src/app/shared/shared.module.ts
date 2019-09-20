import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [PageHeaderComponent],
  exports: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
