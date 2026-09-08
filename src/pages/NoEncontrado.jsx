import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <section className="pagina">
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="boton-primario boton-enlace">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NoEncontrado;
