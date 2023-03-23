import PokeCard from "./pokeCard"
import {useState, useEffect} from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MainContainer(){

    const [pokemon, setPokemon] = useState([])
    const [region, setRegion] = useState(0)

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((res) => res.json())
      .then((data) => setPokemon(data))
    }, [])

    // function handleGeneration(){
    //     setRegion(prev => value)
    // }

    // console.log(pokemon.results)

    const individualPoke = pokemon?.results?.map( singlePoke => {
        return <PokeCard key={singlePoke.name} pokemon={pokemon} singlePoke={singlePoke}/>
    })

    return(
        <div>
            <div>
                <DropdownButton
                as={ButtonGroup}
                key={"primary"}
                variant={"primary"}
                title={"Choose a Generation"}
                // onSubmit={handleGeneration}
                >
                    <Dropdown.Item eventKey="1" value={1} active>
                        Generation 1
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" value={2}>
                        Generation 2
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3" value={3}>
                        Generation 3
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4" value={4}>
                        Generation 4
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="5" value={5}>
                        Generation 5
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="6" value={6}>
                        Generation 6
                    </Dropdown.Item>
                    {/* <Dropdown.Divider /> */}
                    {/* <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
                </DropdownButton>
            </div>
            <div className="pokemonContainer">
                {individualPoke}
            </div>
        </div>
    )
}

export default MainContainer