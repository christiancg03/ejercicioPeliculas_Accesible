import { Outlet } from "react-router-dom";

function Contenedor( { children, titulo } ) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
        {titulo && <h1 id="main-section-title">{titulo}</h1>}
      </section>

      {children}

      <Outlet />
    </main>
  );
}

export default Contenedor;