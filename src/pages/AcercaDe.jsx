import fotoJaco from "../assets/img/jaco.png";
import fotoAleja from "../assets/img/aleja.png";

function AcercaDe() {
  return (
    <section className="pagina">
      <h1>Acerca de</h1>

      <div className="tarjeta tarjeta-perfil">
        <div className="avatares">
          <img src={fotoJaco} alt="Jacobo Gonzalez" className="avatar" />
          <img src={fotoAleja} alt="Alejandra Carmona" className="avatar" />
        </div>

        <div>
          <h2>Jacobo Gonzalez, Alejandra Carmona</h2>
          <ul className="lista-perfil">
            <li><strong>Grupo:</strong> Globant</li>
            <li><strong>Programa académico:</strong> Desarrollo de Software</li>
            <li><strong>Institución:</strong> Cesde</li>
            <li><strong>Año:</strong> 2026</li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/jaco0010/examen2front2globant" target="_blank" rel="noreferrer">
                @jaco0010
              </a>
              <br></br>
              <a href="https://github.com/AlejaCarmona" target="_blank" rel="noreferrer">
                @AlejaCarmona
              </a>
            </li>
          </ul>

          <p className="descripcion-perfil">
            Estudiante de Desarrollo de Software enfocado en construir aplicaciones web con
            JavaScript, React y Java. Este proyecto fue desarrollado como examen práctico de
            Front-End, aplicando componentes, enrutamiento con React Router y validación manual
            de formularios.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AcercaDe;
