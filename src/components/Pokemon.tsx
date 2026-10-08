import type {Pokemon} from "../interfaces/Pokemon.ts";
import styled from "styled-components";

const PokedexDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: bisque;
    gap: 10px;
    padding: 20px;
`;

const PokemonDiv = styled.div<{types: string[]}>`
    border: 1px solid black;
    padding: 15px;
    text-align: center;
    background-color: ${(props) => props.types[0] === "fire" ? "darkorange" : props.types[0] === "water" ? "lightblue" : props.types[0] === "grass" ? "lightgreen" : "white"};
`;

const TypesDiv = styled.div`
    margin: 10px 0;
`;

const MovesDiv = styled.div`
    margin-top: 10px
`;


export default function Pokemon(props: {pokedex: Pokemon[]}) {
    return (
        <PokedexDiv>
            {
                props.pokedex.map((pokemon: Pokemon) =>
                    <PokemonDiv key={pokemon.id} types={pokemon.types}>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <TypesDiv>
                            <h2>Types</h2>
                            {pokemon.types.map((type: string) => (
                                <p key={type}>{type}</p>
                            ))}
                        </TypesDiv>
                        <MovesDiv>
                            <h2>Moves</h2>
                            {pokemon.moves.slice(0, 5).map((move: string) => (
                                <p key={move}>{move}</p>
                            ))}
                        </MovesDiv>
                    </PokemonDiv>
                )
            }
        </PokedexDiv>
    )
}