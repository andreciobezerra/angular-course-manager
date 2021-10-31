import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatedDate',
})
export class FormatedDatePipe implements PipeTransform {
  private formatter = new Intl.DateTimeFormat(
    navigator.language ?? navigator.languages[0],
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }
  );

  transform(value: string) {
    const date = new Date(value);

    return this.formatter.format(date);
  }
}
