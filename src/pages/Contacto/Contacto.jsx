import { useState } from 'react'
import '../styles/Contacto.css'

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState(""); 
  const [mensaje, setMensaje] = useState(""); 

    const actualizarNombre = (e) => {
        setNombre(e.target.value);
    }

    const actualizarEmail = (e) => {
        setEmail(e.target.value);
    }

    const actualizarMensaje = (e) => {
        setMensaje(e.target.value);
    }

    const mostrarMensaje = (e) => {
        e.preventDefault();

        if (nombre == "" || email == "" || mensaje == "") {
          alert(`Necesitas rellenar todo el formulario.`)
        }

        if (nombre !== "" && email !== "" && mensaje !== "") {
          alert(`${nombre}, tu mensaje ha sido recibido. Recibiras una respuesta en breve.`)
        }
    }

  return (
    <section class="formularioContacto">
        <h2>Contactar</h2>

        <form>
          <div class="seccionContacto">
            <label for="nombre">Nombre:
              <input type="text" id="nombre" name="nombre" placeholder='Nombre' onChange={actualizarNombre}/>
            </label>

            <label for="correo">Correo:
              <input type="email" id="correo" placeholder='Correo electronico' onChange={actualizarEmail}/>
            </label>

            <label for="mensaje" id="mensaje">Mensaje:
              <textarea name="mensaje" placeholder='Mensaje a enviar' onChange={actualizarMensaje}/>
            </label>
          </div>

          <button onClick={mostrarMensaje}>Enviar</button>
          
      </form>
    </section>
  )
}

export default Contacto
