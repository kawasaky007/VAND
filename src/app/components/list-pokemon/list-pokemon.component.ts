import { Component, Injector, ViewChild } from '@angular/core';
import { AbsBaseComponent } from '../abs-base.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, TypePokemon } from 'src/app/models';
import { BehaviorSubject, Observable, debounceTime, pipe, takeUntil } from 'rxjs';
import { BaseTableComponent } from '../base-table.component';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
  providers: [PokemonService]

})
export class ListPokemonComponent extends BaseTableComponent {

  listDataPokemon: Array<Pokemon> = [];
  type: Array<TypePokemon> = [];
  selectedType: TypePokemon | null = null;
  optionList: Array<TypePokemon> = [];
  isLoadingSelect: boolean = false
  loading$: Observable<boolean> = this.pokemonService.loading$;
  total$: Observable<number> = this.pokemonService.total$;
  searchChange$ = new BehaviorSubject('');
  @ViewChild('pokemonItem') pokemonItem?: PokemonItemComponent
  constructor(
    injector: Injector,
    private pokemonService: PokemonService
  ) {
    super(injector);
    this.watch();
  }
  ngOnInit(): void {
    // super(this.ngOnInit())
    this.pokemonService.getTypes();
    this.pokemonService.getData();
  }

  showItemPokemon(item: Pokemon): void {
    this.pokemonService.getSprite(item.id);
    this.pokemonItem?.show(item)
  }

  nzSortOrderChange(key: string, event: any) {
    console.log(event);
    // if ()

  }

  nzPageIndexChange(event: any) {
    this.pokemonService.setPageNumber(event);
    this.pokemonService.getData();

  }
  watch(): void {


    this.pokemonService.pokemon$.pipe((takeUntil(this.destroy$))).subscribe((res) => {
      this.listDataPokemon = res;
    })
    this.pokemonService.pokemonType$.pipe((takeUntil(this.destroy$))).subscribe((res) => {
      this.type = res;
      this.optionList = this.type


    })

    this.searchChange$.asObservable().pipe(debounceTime(500)).subscribe((res) => {
      console.log(res);
      this.isLoadingSelect = false
      if (!res && res === '') {
        this.optionList = this.type
        return
      }

      this.optionList = this.type.filter((item) => item.name.toLocaleLowerCase().includes(res.toLocaleLowerCase()) || item.id.toString().toLocaleLowerCase().includes(res.toLocaleLowerCase()))

    })

  }
  onSearchSelect(value: string): void {
    this.isLoadingSelect = true;
    this.searchChange$.next(value);
  }
  ngModelChangeSelect(event: any) {
    this.pokemonService.setFilterType(event);
    this.pokemonService.getData();

  }
}
