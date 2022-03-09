import { Pipe, PipeTransform } from '@angular/core';
import { Technologie } from '../technologie';

@Pipe({
  name: 'filterTechnologie'
})
export class FilterTechnologiePipe implements PipeTransform {
  transform(technologien: Technologie[], filter: string): Technologie[] {
    if (!technologien || !filter) {
      return technologien;
    }

    return technologien.filter(technologie => technologie.ring.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    
  }

}
