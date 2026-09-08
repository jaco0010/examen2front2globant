import { Link, useLocation } from "react-router-dom";

const CLAVE_LOCALSTORAGE = "nutritrack_ultimoRegistro";


function calcularRecomendaciones(registro) {
  const recomendaciones = [];

  const vasosAgua = Number(registro.vasosAgua);
  const calorias = Number(registro.calorias);
  const edad = Number(registro.edad);

  if (vasosAgua < 8) {
    const faltantes = 8 - vasosAgua;
    recomendaciones.push(
      `Te hacen falta ${faltantes} vaso${faltantes === 1 ? "" : "s"} de agua para llegar a los 8 recomendados al día.`
    );
  } else {
    recomendaciones.push("Tu consumo de agua es adecuado. ¡Sigue así!");
  }

  if (calorias > 2500) {
    recomendaciones.push("Tu consumo calórico es alto. Revisa el tamaño de tus porciones.");
  } else if (calorias < 1200) {
    recomendaciones.push("Tu consumo calórico es muy bajo. Consulta con tu nutricionista.");
  } else {
    recomendaciones.push("Tu consumo calórico se encuentra en un rango adecuado.");
  }

  if (registro.actividadFisica === "No") {
    recomendaciones.push("Intenta realizar al menos 30 minutos de actividad física hoy.");
  } else {
    recomendaciones.push("¡Bien hecho! Mantener la actividad física ayuda a tu bienestar general.");
  }

  if (edad > 60) {
    recomendaciones.push("Por tu edad, prioriza alimentos ricos en calcio y proteína para cuidar huesos y músculos.");
  } else if (edad < 12) {
    recomendaciones.push("A esta edad es clave una alimentación variada que apoye el crecimiento.");
  }

  return recomendaciones;
}

function CuidadoNutricional() {
  const { state } = useLocation();

  let registro = state;
  if (!registro) {
    const guardado = localStorage.getItem(CLAVE_LOCALSTORAGE);
    if (guardado) registro = JSON.parse(guardado);
  }

  if (!registro) {
    return (
      <section className="pagina">
        <h1>Aún no hay un registro</h1>
        <p>Todavía no has diligenciado el formulario de comidas del día.</p>
        <Link to="/" className="boton-primario boton-enlace">
          Ir al formulario
        </Link>
      </section>
    );
  }

  const recomendaciones = calcularRecomendaciones(registro);

  return (
    <section className="pagina">
      <h1>Hola, {registro.nombre} </h1>
      <p className="subtitulo">Este es el resumen de tu registro de hoy y tus recomendaciones.</p>

      <div className="tarjeta">
        <h2>Resumen del registro</h2>
        <ul className="lista-resumen">
          <li><strong>Correo:</strong> {registro.correo}</li>
          <li><strong>Edad:</strong> {registro.edad} años</li>
          <li><strong>Peso:</strong> {registro.peso} kg</li>
          <li><strong>Fecha del registro:</strong> {registro.fecha}</li>
          <li><strong>Tipo de comida principal:</strong> {registro.tipoComida}</li>
          <li><strong>Descripción de los alimentos:</strong> {registro.descripcion}</li>
          <li><strong>Calorías estimadas:</strong> {registro.calorias} kcal</li>
          <li><strong>Vasos de agua:</strong> {registro.vasosAgua}</li>
          <li><strong>Actividad física:</strong> {registro.actividadFisica}</li>
        </ul>
      </div>

      <div className="tarjeta">
        <h2>Recomendaciones de cuidado nutricional</h2>
        <ul className="lista-recomendaciones">
          {recomendaciones.map((recomendacion, indice) => (
            <li key={indice}>{recomendacion}</li>
          ))}
        </ul>
      </div>

      <Link to="/" className="boton-primario boton-enlace">
        Hacer un nuevo registro
      </Link>
    </section>
  );
}

export default CuidadoNutricional;
