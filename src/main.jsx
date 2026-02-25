import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router";

// Pages
import App from './App.jsx'
import Inicio from './pages/Inicio/Inicio.jsx';
import Recetas from './pages/Recetas/Recetas.jsx';
import Formulario from './pages/Formulario/Form.jsx';
import Contacto from './pages/Contacto/Contacto.jsx';
import About from './pages/About/About.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
