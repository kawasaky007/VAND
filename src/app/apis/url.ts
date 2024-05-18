

export const url_default = 'https://api.vandvietnam.com/api/pokemon-api';

export const API = {
    POKEMON: `${url_default}/pokemons`,
    TYPE: `${url_default}/types`,
    SPRITE: (id: string) => `${url_default}/pokemons/${id}/sprite`,

}