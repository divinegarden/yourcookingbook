import { useState, useContext, useEffect } from 'react'
import './styles/BarraLateral.css'

// Context
import { ContextoRecetas } from "../context/Contextos.jsx";

// Icons
import Search from '/icons/magnifying-glass-solid-full.svg'

function BarraLateral() {
    const { setBusqueda, setOrden, setTag } = useContext(ContextoRecetas);
    const [tags, setTags] = useState([]);

    // Cargar etiquetas
    useEffect(() => {
        fetch("https://dummyjson.com/recipes/tags")
        .then(res => res.json())
        .then(data => setTags(data));
    }, []);

  return (
    <aside className='sidebar'>

        {/* Busqueda */}
        <div className="busqueda">
            <input type="text" placeholder='Buscar receta. . .' onChange={(e) => setBusqueda(e.target.value)}/>
            <button>
                <img src={Search} />
            </button>
        </div>

        {/* Ordenar: por nombre */}
        <label htmlFor="orden"> Ordenar:
            <select name="orden" id="orden" onChange={(e) => setOrden(e.target.value)}>
                <option value="">Por defecto</option>
                <option value="asc">Nombre: Ascendiente</option>
                <option value="desc">Nombre: Descendiente</option>
            </select>
        </label>

        {/* Filtrar: por etiqueta*/}
        <label> Filtrar:
            <select name="etiqueta" id="etiqueta" onChange={(e) => setTag(e.target.value)}> 
                <option value="">Por etiqueta</option>
                {tags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
            </select>
        </label>
    </aside>
  )
}

export default BarraLateral
