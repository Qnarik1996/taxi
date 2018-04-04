import { Pipe, PipeTransform } from '@angular/core';
@Pipe(
  {name: 'image'}
)

export class PipeImage implements PipeTransform {
  transform(value) {
    return 'url('+value+')';
}
}