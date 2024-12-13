
import './App.css';
import SubPromise from "./components/pageSubPromise/SubPromise";
import About from './components/pageAbout/About';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'; // Importa i componenti necessari
// App.tsx


const App = () => {
  return (
    <Router>
      <div>
        <h1>App1 con Routing</h1>
        <nav>
          <ul>
           
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


export const navigateRouting = (navigate: any, identificativo: any,path: string) => {
//const navigate = useNavigate(); // Ottieni la funzione di navigazione
  navigate(`/${path}`, { state: { identificativo } }); // Passa il parametro come stato
}


export default App;

