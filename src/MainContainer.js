import PokeCard from "./pokeCard"
import {useState, useEffect} from "react"

function MainContainer(){

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((res) => res.json())
      .then((data) => setPokemon(data))
    }, [])

    // console.log(pokemon.results)

    const individualPoke = pokemon?.results?.map( singlePoke => {
        return <PokeCard key={singlePoke.name} pokemon={pokemon} singlePoke={singlePoke}/>
    })

    return(
        <div className="pokemonContainer">
            {individualPoke}
        </div>
    )
}

export default MainContainer