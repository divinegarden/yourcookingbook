import { useState, createContext, useEffect } from 'react'
import '../styles/Recetas.css'

// Piezas
import BarraLateral from '../../components/BarraLateral.jsx'
import Receta from '../../components/Receta.jsx'

// Importar Contexto
import { ContextoRecetas } from "../../context/Contextos.jsx";

function Recetas() {
  // Cargar API
    const [recetas, setRecetas] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [orden, setOrden] = useState("");
    const [tag, setTag] = useState("");

    useEffect(() => {
      let url = "https://dummyjson.com/recipes";

      if (busqueda) {
        url = `https://dummyjson.com/recipes/search?q=${busqueda}`;
      } else if (tag) {
        url = `https://dummyjson.com/recipes/tag/${tag}`;
      }

      if (orden) {
        url += `?sortBy=name&order=${orden}`;
      }

      fetch(url)
        .then(res => res.json())
        .then(data => setRecetas(data.recipes || []));
    }, [busqueda, orden, tag]);

  return (
    <ContextoRecetas.Provider value={{
      recetas,
      setBusqueda,
      setOrden,
      setTag,
    }}>
        <BarraLateral />
        <section className='recetas'>
          {recetas.length === 0 ? <p>Cargando recetas...</p> :

          recetas.map(receta => (
            <Receta key={receta.id} receta={receta} />
          ))}
        </section>
    </ContextoRecetas.Provider>
  )
}

export default Recetas
