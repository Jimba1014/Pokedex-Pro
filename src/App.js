import {useState, useEffect} from "react"
import './App.css';
import PokeNav from './PokeNav';
import MainContainer from './MainContainer';

function App() {


  // console.log(pokemon.results[0])

  return (
    <div>
      <PokeNav/>
      <MainContainer/>
      <div>Pokemon</div>
    </div>
  );
}

export default App;
