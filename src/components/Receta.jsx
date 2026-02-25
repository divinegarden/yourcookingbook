import './styles/Receta.css'


function Receta(props) {

  return (
        <div className="receta">

        <h2>{props.receta.name}</h2>

        <p className="rating">
            ★ {props.receta.rating} ({props.receta.reviewCount} opiniones)
        </p>

        <img src={props.receta.image} alt={props.receta.name} />

        <hr/>

        <div className="guiaReceta">

            <details className="ingredientes">
            <summary>
                <h3>Ingredientes</h3>
            </summary>
            <ul>
                {props.receta.ingredients.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
                ))}
            </ul>
            </details>
            
            <details className="instrucciones">
            <summary>
                <h3>Instrucciones</h3>
            </summary>
            <ol>
                {props.receta.instructions.map((paso, index) => (
                <li key={index}>{paso}</li>
                ))}
            </ol>
            </details>

        </div>
        <br/>
        <div className="cocina">
            <div>
            <h3>Tiempo de preparación</h3>
            <p>{props.receta.prepTimeMinutes} min</p>
            </div>

            <div>
            <h3>Tiempo de cocción</h3>
            <p>{props.receta.cookTimeMinutes} min</p>
            </div>
        </div>
        <br/>
        <div className="porciones">
            <h3>Porciones</h3>
            <p>
            {props.receta.servings} personas, {props.receta.caloriesPerServing} cal
            </p>
        </div>
        <br/>
        <div className="informacion">
            <h3>Información</h3>
            <div className="info">
                <p>{props.receta.difficulty}</p>
                <p>{props.receta.cuisine}</p>
                <p>{props.receta.mealType.join(", ")}</p>
            </div>
        </div>
        <br/>
        <p className="etiquetas">
            {props.receta.tags.join(", ")}
        </p>

        </div>
  );
}

export default Receta;