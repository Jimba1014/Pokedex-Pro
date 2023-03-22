import {useState, useEffect} from "react"
import './App.css';
import PokeNav from './PokeNav';
import MainContainer from './MainContainer';

function App() {


  // console.log(pokemon.results[0])

  return (
    <div>
      <div>Pokemon</div>
      <PokeNav/>
      <MainContainer/>
      
    </div>
  );
}

export default App;
