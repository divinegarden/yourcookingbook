import { useState } from 'react'
import '../styles/Form.css'

function Form() {
  // Informacion de la receta a crear
  const [datos, setDatos] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    difficulty: "",
    cuisine: "",
    caloriesPerServing: "",
    tags: "",
    image: "",
    rating: "",
    reviewCount: "",
    mealType: ""
  })

  const manejarCambio = (e) => {
    const { name, value } = e.target
    setDatos(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const manejarSubida = (e) => {
    e.preventDefault()

    const recetaFinal = {
      ...datos,
      prepTimeMinutes: Number(datos.prepTimeMinutes),
      cookTimeMinutes: Number(datos.cookTimeMinutes),
      servings: Number(datos.servings),
      caloriesPerServing: Number(datos.caloriesPerServing),
      rating: Number(datos.rating),
      reviewCount: Number(datos.reviewCount),
      ingredients: datos.ingredients.split(",").map(i => i.trim()),
      instructions: datos.instructions.split(",").map(i => i.trim()),
      tags: datos.tags.split(",").map(i => i.trim()),
      mealType: datos.mealType.split(",").map(i => i.trim())
    }

    fetch('https://dummyjson.com/recipes/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recetaFinal)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Receta creada:", data)
        alert("Receta creada correctamente ✓")
      })
      .catch(error => console.error(error))
  }

  return (
    <section className="formularioCreacion">
      <h2>Crear receta</h2>

      <form onSubmit={manejarSubida}>

        <div className="seccionEditar">

          <label htmlFor="name">
            Nombre:
            <input type="text" id="name" name="name"
              value={datos.name}
              onChange={manejarCambio}
              required
            />
          </label>

          <label htmlFor="ingredients">
            Ingredientes (separados por coma):
            <textarea id="ingredients" name="ingredients"
              value={datos.ingredients}
              onChange={manejarCambio}
              required
            />
          </label>

          <label htmlFor="instructions">
            Instrucciones (separadas por coma):
            <textarea id="instructions" name="instructions"
              value={datos.instructions}
              onChange={manejarCambio}
              required
            />
          </label>

          <label htmlFor="prepTimeMinutes">
            Tiempo de preparación (min):
            <input type="number" id="prepTimeMinutes" name="prepTimeMinutes"
              value={datos.prepTimeMinutes}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="cookTimeMinutes">
            Tiempo de cocción (min):
            <input type="number" id="cookTimeMinutes" name="cookTimeMinutes"
              value={datos.cookTimeMinutes}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="servings">
            Porciones:
            <input type="number" id="servings" name="servings"
              value={datos.servings}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="difficulty">
            Dificultad:
            <input type="text" id="difficulty" name="difficulty"
              value={datos.difficulty}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="cuisine">
            Cocina:
            <input type="text" id="cuisine" name="cuisine"
              value={datos.cuisine}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="caloriesPerServing">
            Calorías por porción:
            <input type="number" id="caloriesPerServing" name="caloriesPerServing"
              value={datos.caloriesPerServing}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="tags">
            Etiquetas (separadas por coma):
            <input type="text" id="tags" name="tags"
              value={datos.tags}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="mealType">
            Tipo de comida (separado por coma):
            <input type="text" id="mealType" name="mealType"
              value={datos.mealType}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="image">
            URL Imagen:
            <input type="text" id="image" name="image"
              value={datos.image}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="rating">
            Valoración:
            <input type="number" step="0.1" min="0" max="5"
              id="rating" name="rating"
              value={datos.rating}
              onChange={manejarCambio}
            />
          </label>

          <label htmlFor="reviewCount">
            Número de reviews:
            <input type="number"
              id="reviewCount" name="reviewCount"
              value={datos.reviewCount}
              onChange={manejarCambio}
            />
          </label>

        </div>

        <button type="submit">Guardar receta</button>

      </form>
    </section>
  )
}

export default Form