import { NgModule } from '@angular/core';
import { FormatedDatePipe } from './formated-date.pipe';

@NgModule({
  declarations: [FormatedDatePipe],
  exports: [FormatedDatePipe],
})
export class PipeModule {}
