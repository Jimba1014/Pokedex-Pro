import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import PokeNav from './PokeNav';
import MainContainer from './MainContainer';

function App() {
  return (
    <div>
      <PokeNav/>
      <MainContainer/>
      <div>Pokemon</div>
    </div>
  );
}

export default App;
