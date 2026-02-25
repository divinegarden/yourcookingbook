import { NavLink } from "react-router";

function Rutas() {

  return (
    <nav>
        <NavLink to="/">
            Inicio
        </NavLink>
        <NavLink to="/recetas">
            Recetas
        </NavLink>
        <NavLink to="/formulario">
            Formulario
        </NavLink>
        <NavLink to="/contacto">
            Contacto
        </NavLink>
        <NavLink to="/about">
            About
        </NavLink>
    </nav>
  );
}

export default Rutas
