// import logo from './logo.svg';
import './App.css';
import ComponenteA from './componentes/ejercicio.1.2.3/Componente-A';
// import Greeting from './componentes/pure/greeting';
// import GreetingF from './componentes/pure/greetingF';
// import TaskListComponent from './componentes/container/task-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/*Componente propio de greeting */}
      {/* <Greeting name= "Dante"/> */}
      {/* Componente de ejemplo funcional */}
      {/* <GreetingF name= "Dante"/> */}
    {/* Componente de Listado de tareas  */}
      {/* <TaskListComponent></TaskListComponent> */}
        <ComponenteA 
          name = "Dante"
          lastname = "Roldan"
          email = "dante@gmail.com"
          online = {false}
        />
     </header>
    </div>
  );
}

export default App;
