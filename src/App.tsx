
import './App.css';
import SubPromise from "./components/pageSubPromise/SubPromise";
import About from './components/pageAbout/About';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importa i componenti necessari
// App.tsx


const App = () => {
  return (
    <Router>
      <div>
        <h1>App1 con Routing</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Link alla Home */}
            </li>
          
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<SubPromise/>} /> {/* Rende il componente Home alla route '/' */}
          <Route path="/about" element={<About />} /> {/* Rende il componente About alla route '/about' */}
        </Routes>
      </div>
    </Router>
  );
}

//export default App;

/* Colore del testo 


  return (
    <div className="App">
      <header className="App-header">
        <img src={inter} className="App-logo" alt="logo" />
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SubPromise nomeProps="Pippo">
        </SubPromise>
      </header>
    </div>
  );
}
*/

export default App;

