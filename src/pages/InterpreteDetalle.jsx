import { useParams } from "react-router-dom";
import peliculas from "../data/peliculas";

function InterpreteDetalle() {
    const { nombre } = useParams();
    const nombreActorcod = decodeURIComponent(nombre);

    // Buscar al actor dentro de todas las películas
    const actorEncontrado = peliculas
        .flatMap(p => p.actores.map(a => ({ ...a, pelicula: p })))
        .find(a => a.nombre === nombreActorcod);

    if (!actorEncontrado) {
        return <h1 className="text-center mt-10 text-red-600">Actor no encontrado</h1>;
    }

    // Películas donde aparece este actor
    const pelisDelActor = peliculas.filter(p =>
        p.actores.some(a => a.nombre === nombreActorcod)
    );

    return (
        <div className="max-w-3xl mx-auto mt-10 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">{actorEncontrado.nombre}</h1>

            <img
                src={actorEncontrado.imagen}
                alt={actorEncontrado.nombre}
                className="w-72 h-auto mx-auto rounded-lg shadow-lg"
            />

            <p className="mt-6 text-gray-700 text-lg">{actorEncontrado.biografia}</p>

            <p className="mt-4 text-gray-500">
                <strong>Fecha de nacimiento:</strong> {actorEncontrado.fechaNacimiento}
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Películas donde participa</h2>

            <ul className="space-y-3">
                {pelisDelActor.map(p => (
                    <li key={p.id} className="bg-gray-100 p-4 rounded-lg shadow">
                        <figure>
                        <img src={p.cartelera} alt={`Cartel de ${p.nombre}`} />
                        </figure>
                        <strong>{p.nombre}</strong> – Nota: {p.nota}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InterpreteDetalle;