import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="w-full bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo o título */}
                <h1 className="text-xl font-heading-h2 text-(--colorprimary)">
                    Página de Cine
                </h1>

                {/* Enlaces */}
                <ul className="flex items-center gap-6">
                    <li>
                        <Link 
                            to="/" 
                            className="text-gray-700 hover:text-(--colorprimary) transition-colors font-medium"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/login" 
                            className="text-gray-700 hover:text-(--colorprimary) transition-colors font-medium"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/peliculas" 
                            className="text-gray-700 hover:text-(--colorprimary) transition-colors font-medium"
                        >
                            Películas
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/interpretes" 
                            className="text-gray-700 hover:text-(--colorprimary) transition-colors font-medium"
                        >
                            Intérpretes
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/admin" 
                            className="text-gray-700 hover:text-(--colorprimary) transition-colors font-medium"
                        >
                            Administración
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;
