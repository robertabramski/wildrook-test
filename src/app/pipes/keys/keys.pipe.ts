import { PipeTransform, Pipe } from '@angular/core';

/*
The keys pipe is used to group the data into
severity levels. Perhaps `keyVal` would be a
more appropriate name.
*/
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]):any {
    let keys = [];
    for(let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
