import { useParams } from "react-router-dom";
import peliculas from "../data/peliculas";

function InterpreteDetalle() {
    const { index } = useParams();
    const indexNum = parseInt(index, 10); // convertir a número

    // Crear lista global de actores con índice
    const actoresGlobal = peliculas.flatMap(peli =>
        peli.actores.map(actor => ({ ...actor, peliculas: peliculas.filter(p => p.actores.includes(actor)) }))
    );

    const actorEncontrado = actoresGlobal[indexNum];

    if (!actorEncontrado) {
        return <h1 className="text-center mt-10 text-red-600">Actor no encontrado</h1>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">{actorEncontrado.nombre}</h1>

            <img
                src={actorEncontrado.imagen}
                alt={actorEncontrado.nombre}
                className="w-80 h-80 mx-auto rounded-lg shadow-lg object-cover"
            />

            <p className="mt-6 text-gray-700 text-lg">{actorEncontrado.biografia}</p>

            <p className="mt-4 text-gray-500">
                <strong>Fecha de nacimiento:</strong> {actorEncontrado.fechaNacimiento}
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Películas donde participa</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {actorEncontrado.peliculas.map(p => (
                    <li key={p.id} className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center">
                        <figure className="w-48 h-64 overflow-hidden rounded-md">
                            <img src={p.cartelera} alt={`Cartel de ${p.nombre}`} className="w-full h-full object-cover"/>
                        </figure>
                        <strong className="mt-2">{p.nombre}</strong> Nota: {p.nota}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InterpreteDetalle;