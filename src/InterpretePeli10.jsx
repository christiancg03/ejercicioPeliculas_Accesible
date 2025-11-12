function Interprete(props) {
  const { foto, nombre, esNota10 } = props;
  return (
    /**
     * Utilizando la definición de clases de Tailwind 
     */
    // <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-80 m-4 overflow-hidden">
    //     <img
    //         src={foto}
    //         alt={`Foto de ${nombre}`}
    //         className="w-full h-80 object-cover"
    //     />
    //     <div className="p-4">
    //         <h2 className="text-xl font-semibold text-gray-800 mb-2">{nombre}</h2>
    //         <p className="text-gray-600 text-sm leading-relaxed">{props.children}</p>
    //     </div>
    // </div>
    // -- //

    /**
     * Con Anima 
     */
    <article
      tabIndex="0"
      aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`}
      className="flex flex-col items-start gap-3 p-4 rounded-lg …"
    >
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
              <img
                src={foto}
                alt={`Foto de ${nombre}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

          <header>
            <h2
              className={`${esNota10}`}
            >
              <strong>{nombre}</strong>
              {esNota10 && <em> – Intérprete destacado</em>}
            </h2>
          </header>

          <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
            {props.children}
          </p>
  
    </article>

  );
}

export default Interprete;


