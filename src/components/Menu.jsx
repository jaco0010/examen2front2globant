import { NavLink } from "react-router-dom";

function Menu() {
  const enlaceClase = ({ isActive }) => (isActive ? "enlace-menu enlace-activo" : "enlace-menu");

  return (
    <aside className="barra-lateral">
      <div className="marca">
        <span className="marca-icono">🥗</span>
        <span className="marca-nombre">NutriTrack</span>
      </div>

      <nav className="menu-enlaces">
        <NavLink to="/" end className={enlaceClase}>
          <span className="enlace-icono">📋</span> Registro
        </NavLink>
        <NavLink to="/acerca-de" className={enlaceClase}>
          <span className="enlace-icono">👤</span> Acerca de
        </NavLink>
      </nav>

      <p className="barra-lateral-pie">Acompañamiento nutricional</p>
    </aside>
  );
}

export default Menu;
