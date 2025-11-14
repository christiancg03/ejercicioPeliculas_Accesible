function Interprete({ foto, nombre, esNota10, children }) {
    return (
        <article 
            tabIndex="0"
            aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
            // transition-transform transform hover:scale-105
        >
            <figure className="w-full aspect-square rounded-lg overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{children}</figcaption>
            </figure>

            <header className="mt-4">
                <h2 className={`text-lg font-bold ${esNota10 ? "text-red-600" : "text-gray-800"}`}>
                    {nombre} {esNota10 && <em></em>}
                </h2>
            </header>

            <p className="mt-2 text-sm text-gray-600">{children}</p>
        </article>
    );
}

export default Interprete;
