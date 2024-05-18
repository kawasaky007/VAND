import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, finalize, takeUntil, throwError } from "rxjs";
import { ApiPokemon } from "../apis";
import { Pokemon, TypePokemon } from "../models";
import { BaseTableService } from "./base-table-service.service";
@Injectable({ providedIn: 'root' })
export class PokemonService extends BaseTableService {
    // POKEMON
    private subscriptionPokemon = new BehaviorSubject<Array<Pokemon>>([]);
    pokemon$: Observable<Array<Pokemon>> = this.subscriptionPokemon.asObservable();
    // TYPE
    private subscriptionPokemonType = new BehaviorSubject<Array<TypePokemon>>([]);
    pokemonType$: Observable<Array<TypePokemon>> = this.subscriptionPokemonType.asObservable();
    constructor(
        private apiPokemon: ApiPokemon
    ) {
        super()
    }
    setDataPokemon(value: Array<Pokemon>): void {
        this.subscriptionPokemon.next(value)
    }
    setDataPokemonType(value: Array<TypePokemon>): void {
        this.subscriptionPokemonType.next(value)
    }
   

    getData(): void {
        this.setLoading(true)
        this.apiPokemon.getPokemon(this.getPayload()).pipe(
            catchError((err) => {
                return throwError(err)
            }
            ),
            takeUntil(this.destroy$),
            finalize(() => this.setLoading(false)))
            .subscribe(res => {
                this.setDataPokemon(res.data);
                this.setTotal(res.meta?.total)

            })
    }

    getTypes(): void {
        this.apiPokemon.getListTypes().pipe(
            catchError((err) => {
                return throwError(err)
            }
            ),
            takeUntil(this.destroy$))
            .subscribe(res => {
                this.setDataPokemonType(res.data);

            })
    }

    getSprite(id: string): string {
        return this.apiPokemon.downSprite(id)
    }


}