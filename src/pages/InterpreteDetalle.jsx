import { useParams } from "react-router-dom";
import peliculas from "../data/peliculas";

function InterpreteDetalle() {
    const { index } = useParams();
    
    // Lista global de actores
    const actores = peliculas.flatMap(p => p.actores);

    // El Actor seleccionado que pillamos de la lista
    const actor = actores[index];

    if (!actor) {
        return <h1 className="text-center mt-10 text-red-600">Actor no encontrado</h1>;
    }

    // Películas donde sale el actor
    const pelisDelActor = peliculas.filter(p =>
        p.actores.find(a => a.nombre === actor.nombre)
    );

    return (
        <div className="max-w-3xl mx-auto mt-10 p-4">
            <a href="/interpretes" class="px-4 py-2 mt-6 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium transition">Volver</a>
            <h1 className="text-3xl font-bold text-center mb-6">{actor.nombre}</h1>

            <img
                src={actor.imagen}
                alt={actor.nombre}
                className="w-80 h-80 mx-auto rounded-lg shadow-lg object-cover"
            />

            <p className="mt-6 text-gray-700 text-lg">{actor.biografia}</p>

            <p className="mt-4 text-gray-500">
                <strong>Fecha de nacimiento:</strong> {actor.fechaNacimiento}
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Películas donde participa</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4 justify-center text-center">
                {pelisDelActor.map(p => (
                    <li key={p.id} className="p-4 rounded-lg flex flex-col items-center">
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