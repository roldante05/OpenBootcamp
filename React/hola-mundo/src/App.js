import logo from './logo.svg';
import './App.css';
import Greeting from './componentes/pure/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/*Componente propio de greeting */}

      <Greeting name= "Dante"/>
        
      </header>
    </div>
  );
}

export default App;
