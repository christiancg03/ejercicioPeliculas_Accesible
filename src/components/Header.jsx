import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-heading-h3 text-(--colorprimary)">
          Página de Cine
        </h1>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden flex items-center px-3 py-2 text-gray-700 border rounded border-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Icono X
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Icono hamburguesa
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menú ordenador */}
        <ul className="hidden sm:flex items-center gap-6">
          <li><Link to="/" className="text-gray-700 hover:text-(--colorprimary) font-medium">Inicio</Link></li>
          <li><Link to="/login" className="text-gray-700 hover:text-(--colorprimary) font-medium">Login</Link></li>
          <li><Link to="/peliculas" className="text-gray-700 hover:text-(--colorprimary) font-medium">Películas</Link></li>
          <li><Link to="/interpretes" className="text-gray-700 hover:text-(--colorprimary) font-medium">Intérpretes</Link></li>
          <li><Link to="/admin" className="text-gray-700 hover:text-(--colorprimary) font-medium">Administración</Link></li>
        </ul>
      </div>

      {/* Menú móvil */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"} px-6 pb-4`}>
        <ul className="flex flex-col gap-4">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-(--colorprimary) font-medium">Inicio</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-(--colorprimary) font-medium">Login</Link></li>
          <li><Link to="/peliculas" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-(--colorprimary) font-medium">Películas</Link></li>
          <li><Link to="/interpretes" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-(--colorprimary) font-medium">Intérpretes</Link></li>
          <li><Link to="/admin" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-(--colorprimary) font-medium">Administración</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;