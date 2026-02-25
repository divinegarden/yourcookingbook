import { NavLink } from "react-router";
import { useContext } from "react";
import '../styles/Inicio.css'

// Pieces
import Rutas from "../../components/Rutas.jsx";

// Images
import LightTitle from '/images/lightmode/title.png';
import DarkTitle from '/images/darkmode/title.png';

// Context
import { ContextoTema } from '../../context/Contextos';


function Inicio() {
  const { tema } = useContext(ContextoTema);


  return (
    <section>
      <div className='home'>
        <h1>Inicio</h1>

        <br/>
        <p>Porfavor, visite una de las siguientes páginas...</p>
        <Rutas />
        <img src={tema === "light" ? LightTitle : DarkTitle} alt="Your cooking book" />

      </div>
    </section>
  );
}

export default Inicio
