import { useParams } from "react-router-dom";
import peliculas from "../data/peliculas";

function PeliculaDetalle() {
    const { id } = useParams();
    const pelicula = peliculas.find(p => p.id == id);

    if (!pelicula) {
        return <h1 className="text-center mt-10 text-red-600">Película no encontrada</h1>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-4">
            <a href="/peliculas" class="px-4 py-2 mt-6 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium transition">Volver</a>
            <h1 className="text-3xl font-bold text-center mb-6">{pelicula.nombre}</h1>

            <img
                src={pelicula.cartelera}
                alt={pelicula.nombre}
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
            />

            <p className="mt-6 text-gray-700 text-lg">{pelicula.resumen}</p>

            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
            <p><strong>Nota:</strong> {pelicula.nota}</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-center">Intérpretes</h2>

            <ul className="space-y-2">
                {pelicula.actores.map((actor, index) => (
                    <li key={index} className="p-4 rounded-lg flex flex-col items-center">
                        <strong>{actor.nombre}</strong>
                        <img src={actor.imagen} alt="" className="w-48 h-64 object-cover" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PeliculaDetalle;