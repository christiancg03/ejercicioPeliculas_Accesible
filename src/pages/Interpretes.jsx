import Interprete from "../components/InterpretePeli10";
import peliculas from "../data/peliculas";

function Interpretes() {

    // Lista de actores
    const actores = peliculas.flatMap(p => p.actores);

    return (
        <>
            <h1 className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary)">
                Intérpretes
            </h1>

            <p className="body-text">Listado de intérpretes disponibles:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
                {actores.map((actor, index) => (
                    <Interprete
                        key={index}
                        index={index}
                        nombre={actor.nombre}
                        foto={actor.imagen}
                        esNota10={false}
                    >
                        {actor.biografia}
                    </Interprete>
                ))}
            </div>
        </>
    );
}

export default Interpretes;