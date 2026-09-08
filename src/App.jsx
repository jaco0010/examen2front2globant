import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import RegistroComidas from "./pages/RegistroComidas";
import CuidadoNutricional from "./pages/CuidadoNutricional";
import AcercaDe from "./pages/AcercaDe";
import NoEncontrado from "./pages/NoEncontrado";
import "./styles/estilos.css";

function App() {
  return (
    <div className="app-layout">
      <Menu />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<RegistroComidas />} />
          <Route path="/cuidado-nutricional" element={<CuidadoNutricional />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
