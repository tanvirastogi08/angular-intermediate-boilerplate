import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'addCharacter'
})
export class AddCharacterPipe implements PipeTransform {

  public transform(value: string, character: string): string {
    const tempValue = value.split('');
    tempValue.splice(3, 0, character);
    value = tempValue.join('');
    return value;
  }
}
