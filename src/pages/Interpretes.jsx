import Interprete from "../components/InterpretePeli10";
import peliculas from "../data/peliculas";

function Interpretes() {
    // Crear lista global de actores con índice único
    const actoresGlobal = peliculas.flatMap(peli =>
        peli.actores.map(actor => ({ ...actor, peliculas: peliculas.filter(p => p.actores.includes(actor)) }))
    );
    return (
        <>
            <h1 className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]">
                Intérpretes
            </h1>

            <p className="body-text">
                Listado de intérpretes disponibles:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
                {peliculas.flatMap(pelicula =>
                    actoresGlobal.map((actor, index) => (
                        <Interprete
                            key={`${pelicula.id}-${index}`}
                            index={index}
                            nombre={actor.nombre}
                            foto={actor.imagen}
                            esNota10={pelicula.nota === 10}
                        >
                            {actor.biografia}
                        </Interprete>
                    ))
                )}
            </div>
        </>
    );
}

export default Interpretes;