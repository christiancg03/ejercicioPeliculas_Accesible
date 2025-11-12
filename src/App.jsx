import Contenedor from "./components/Contenedor";
// import Interprete from "./Interprete";
import Interprete from "./components/InterpretePeli10";
import peliculas from "./data/peliculas";

function App() {
  return (
    
    <Contenedor>
      <h1 className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]">
      {/* <h1 className="h1__sqlito [text-shadow:0px_4px_4px_#00000040]"> */}
      {/* <h1 className="contenedor__h1 [text-shadow:0px_4px_4px_#00000040]"> */}
        Intérpretes
      </h1>
      {/* <p className="text-(--body-text-font-color) leading-(--body-text-line-height)"> */}
      <p className="body-text">
        Listado de intérpretes disponibles:
      </p>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
        
          {peliculas
          // .filter(pelicula => pelicula.clasificacion === "Drama") // solo películas de Drama
          .map(pelicula =>
            pelicula.actores.map((actor, index) => (
              <Interprete
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10} // pasamos si la nota es 10
              >
                {actor.biografia}
              </Interprete>
            ))
          )}

        </div>
    </Contenedor>
  )
}

export default App
