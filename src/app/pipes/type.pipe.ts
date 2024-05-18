import { Pipe, PipeTransform } from '@angular/core';
import { TypePokemon } from '../models';

@Pipe({
    name: 'type'
})

export class TypePipe implements PipeTransform {
    transform(id: number | string, arrType: Array<TypePokemon>): string {
        if (!id || id === '') {
            return 'unknown';
        } else {
            const index = arrType.findIndex(x => x.id.toString() === id.toString());
            return arrType[index].name;
        }
    }
}

