export interface PokemonResult{
    name: string;
    url: string;
}
export interface PokemonData{
    id: number;
    name: string;
    types: {
        type: {
            name: string;
        }
    }[];
    moves: {
        move: {
            name: string;
        }
    }[];
    sprites: {
        front_default: string;
    }
}
export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    moves: string[];
    image: string;
}
