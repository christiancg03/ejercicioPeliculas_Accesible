import Contenedor from "./components/Contenedor";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
// import Admin from "./pages/Admin";
import Peliculas from "./pages/Peliculas";
// import Login from "./pages/Login";
import Interpretes from "./pages/Interpretes";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import InterpreteDetalle from "./pages/InterpreteDetalle";
import PeliculaDetalle from "./pages/PeliculaDetalle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Contenedor></Contenedor>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/inicio" element={<Navigate to="/"></Navigate>}></Route>
          {/* <Route path="/admin" element={<Admin></Admin>}></Route> */}
          <Route path="/peliculas" element={<Peliculas></Peliculas>}></Route>
          <Route path="/interpretes" element={<Interpretes></Interpretes>}></Route>
          <Route path="/interprete/:index" element={<InterpreteDetalle />} />
          <Route path="/pelicula/:id" element={<PeliculaDetalle />} />
          {/* <Route path="/login" element={<Login></Login>}></Route> */}
        </Route>


         <Route path="*" element={<ErrorPage />}></Route>

      </Routes>

    </>
  );
}

export default App;