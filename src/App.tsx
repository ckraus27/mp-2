import {useEffect, useState} from "react";
import type {Pokemon, PokemonResult, PokemonData} from "./interfaces/Pokemon.ts";
import PokemonList from "./components/Pokemon.tsx";
import styled from "styled-components";

const ParentDiv = styled.div`
`;

export default function App() {
    const [pokedex, setPokedex] = useState<Pokemon[]>([]);

    useEffect(() => {
        async function fetchPokedex(): Promise<void> {
            const rawPokedex = await fetch("https://pokeapi.co/api/v2/pokemon");
            const {results}: {results:PokemonResult[]}  = await rawPokedex.json();

            let i: number = 0;
            const initPokedex: Pokemon[] = [];
            while (i < results.length) {
                const rawPokemon = await fetch(results[i].url);
                const pokemon: PokemonData = await rawPokemon.json();

                const newPokemon: Pokemon = {
                    id: pokemon.id,
                    name: pokemon.name,
                    types: pokemon.types.map((type) => type.type.name),
                    moves: pokemon.moves.map((move) => move.move.name),
                    image: pokemon.sprites.front_default
                };

                initPokedex.push(newPokemon);

                i++;
            }
            setPokedex(initPokedex);
        }
        fetchPokedex()
            .then(() => console.log("Pokedex loaded successfully"))
            .catch((e: Error) => console.log("Pokedex failed with error: " + e));
    }, [pokedex.length]);

    return(
        <ParentDiv>
            <PokemonList pokedex = {pokedex}/>
        </ParentDiv>
    )

}