import { useState, createContext, useEffect } from 'react'
import { NavLink, Outlet } from "react-router";
import './App.css'

// Pieces
import Rutas from './components/Rutas';
import Modal from './components/Modal';

// Images
import LightTitle from '/images/lightmode/title.png';
import DarkTitle from '/images/darkmode/title.png';
import List from '/icons/list-solid-full.svg';

// Contextos
import { ContextoTema } from './context/Contextos';

function App() {
  // Tema
  const [tema, setTema] = useState('light');

  const cambiarTema = () => {
    setTema(prev => prev === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "dark");
  }, [tema]);

  return (
    <ContextoTema.Provider value={{ tema, cambiarTema }}>
      <>
        <header>
          <div className="banner">
            
            <img src={tema === "light" ? LightTitle : DarkTitle} alt="Your cooking book" />
          </div>

          <div className="bar">

            {/* <Modal id="burger" openElement={
              <button>
                <img src={List}/>
              </button>
            }>
              <Rutas />
            </Modal> */}

            <Rutas/>
            <button onClick={cambiarTema}>
              {tema === "light" ? "☀" : "☾"}
            </button>
          </div>
        </header>

        <main className="page">
          <Outlet />
        </main>

        <footer>
          <p>Your Cooking Book © María Teresa Jiménez Olmo</p>
          <br/>
          <a target="_blank" href="https://dummyjson.com/docs/recipes">API utilizada</a>
        </footer>
      </>
    </ContextoTema.Provider>
  );
}

export default App
