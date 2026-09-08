import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CampoFormulario from "../components/CampoFormulario";
import { validarCampo, validarFormulario } from "../utils/validaciones";

const CLAVE_LOCALSTORAGE = "nutritrack_ultimoRegistro";

const valoresIniciales = {
  nombre: "",
  correo: "",
  edad: "",
  peso: "",
  fecha: "",
  tipoComida: "",
  descripcion: "",
  calorias: "",
  vasosAgua: "",
  actividadFisica: "",
};

const camposConfig = [
  { id: "nombre", label: "Nombre completo", tipo: "text" },
  { id: "correo", label: "Correo electrónico", tipo: "email" },
  { id: "edad", label: "Edad", tipo: "number" },
  { id: "peso", label: "Peso en kilogramos", tipo: "number" },
  { id: "fecha", label: "Fecha del registro", tipo: "date" },
  {
    id: "tipoComida",
    label: "Tipo de comida principal",
    tipo: "select",
    opciones: ["Desayuno", "Almuerzo", "Cena", "Refrigerio"],
  },
  { id: "descripcion", label: "Descripción de los alimentos", tipo: "textarea" },
  { id: "calorias", label: "Calorías estimadas del día", tipo: "number" },
  { id: "vasosAgua", label: "Vasos de agua consumidos", tipo: "number" },
  {
    id: "actividadFisica",
    label: "¿Realizó actividad física?",
    tipo: "radio",
    opciones: [
      { valor: "Sí", texto: "Sí" },
      { valor: "No", texto: "No" },
    ],
  },
];

function RegistroComidas() {
  const [formulario, setFormulario] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const formularioRef = useRef(null);
  const navigate = useNavigate();

  function handleChange(evento) {
    const { name, value } = evento.target;
    const nuevoFormulario = { ...formulario, [name]: value };
    setFormulario(nuevoFormulario);


    if (errores[name]) {
      const error = validarCampo(name, value, nuevoFormulario);
      setErrores({ ...errores, [name]: error });
    }
  }

  function handleBlur(evento) {
    const { name, value } = evento.target;
    const error = validarCampo(name, value, formulario);
    setErrores((erroresPrevios) => ({ ...erroresPrevios, [name]: error }));
  }

  function handleSubmit(evento) {
    evento.preventDefault();
    const erroresEncontrados = validarFormulario(formulario);
    setErrores(erroresEncontrados);

    if (Object.keys(erroresEncontrados).length > 0) {
      formularioRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    localStorage.setItem(CLAVE_LOCALSTORAGE, JSON.stringify(formulario));
    navigate("/cuidado-nutricional", { state: formulario });
  }

  return (
    <section className="pagina">
      <h1 ref={formularioRef}>Registro diario de alimentación</h1>
      <p className="subtitulo">
        Completa los datos de lo que consumiste hoy. Todos los campos son obligatorios.
      </p>

      <form onSubmit={handleSubmit} noValidate className="formulario-registro">
        {camposConfig.map((campo) => (
          <CampoFormulario
            key={campo.id}
            id={campo.id}
            label={campo.label}
            tipo={campo.tipo}
            valor={formulario[campo.id]}
            error={errores[campo.id]}
            onChange={handleChange}
            onBlur={handleBlur}
            opciones={campo.opciones}
          />
        ))}

        <button type="submit" className="boton-primario">
          Guardar registro
        </button>
      </form>
    </section>
  );
}

export default RegistroComidas;
