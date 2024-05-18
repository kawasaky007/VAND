import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models';
import { AbsBaseModalComponent } from '../abs-base-modal.component';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent extends AbsBaseModalComponent {
  data?: Pokemon;
  urlImg?: string;
  constructor(
    private pokemonService: PokemonService
  ) {
    super()
  }

  protected override initShow(args?: any): void {
    this.urlImg = this.pokemonService.getSprite(args.id)
    this.data = args
  }
}
