import {useState, useEffect} from "react"
import './App.css';
import PokeNav from './PokeNav';
import MainContainer from './MainContainer';

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then((res) => res.json())
    .then((data) => setPokemon(data))
  }, [])

  console.log(pokemon)

  return (
    <div>
      <PokeNav/>
      <MainContainer/>
      <div>Pokemon</div>
    </div>
  );
}

export default App;
