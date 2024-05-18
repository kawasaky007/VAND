import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { DataList, PayloadList, Pokemon, TypePokemon } from "../models";
import { Injectable } from "@angular/core";
import { API } from "./url";
@Injectable({ providedIn: 'root' })

export class ApiPokemon {
    constructor(
        private http: HttpClient

    ) {

    }
    getPokemon(payload: PayloadList): Observable<DataList<Pokemon>> {

        const params = { ...this.removeNullValues(payload) }

        return this.http.get<DataList<Pokemon>>(API.POKEMON, {
            params: params
        })
    }
    getListTypes(): Observable<DataList<TypePokemon>> {
        return this.http.get<any>(`${API.TYPE}`)
    }
    downSprite(id: string): string {

        // return this.http.get<any>(`${API.SPRITE(id)}`)
        return API.SPRITE(id)
    }


    removeNullValues(obj: any) {
        for (const key in obj) {
            if (obj[key] === null) {
                delete obj[key];
            }
        }
        return obj;
    }
}



