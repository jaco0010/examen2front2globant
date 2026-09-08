const REGEX_NOMBRE = /^[a-zA-ZÁÉÍÓÚÜáéíóúüÑñ\s]+$/;
const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_PESO = /^\d+(\.\d{1})?$/;

function esEntero(valor) {
  return /^\d+$/.test(String(valor).trim());
}

export function validarCampo(nombreCampo, valor, formulario) {
  const texto = typeof valor === "string" ? valor.trim() : valor;

  switch (nombreCampo) {
    case "nombre": {
      if (!texto) return "El nombre es obligatorio.";
      if (texto.length < 3) return "El nombre debe tener al menos 3 caracteres.";
      if (!REGEX_NOMBRE.test(texto)) return "El nombre solo puede contener letras y espacios.";
      return "";
    }

    case "correo": {
      if (!texto) return "El correo electrónico es obligatorio.";
      if (!REGEX_CORREO.test(texto)) return "El correo electrónico no tiene un formato válido.";
      return "";
    }

    case "edad": {
      if (!texto && texto !== 0) return "La edad es obligatoria.";
      if (!esEntero(texto)) return "La edad debe ser un número entero.";
      const numero = Number(texto);
      if (numero < 5 || numero > 100) return "La edad debe ser un número entre 5 y 100.";
      return "";
    }

    case "peso": {
      if (!texto && texto !== 0) return "El peso es obligatorio.";
      if (!REGEX_PESO.test(String(texto).trim())) {
        return "El peso debe ser un número válido (máximo un decimal).";
      }
      const numero = Number(texto);
      if (numero < 20 || numero > 300) return "El peso debe estar entre 20 y 300 kg.";
      return "";
    }

    case "fecha": {
      if (!texto) return "La fecha del registro es obligatoria.";
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      const fechaIngresada = new Date(texto + "T00:00:00");
      if (fechaIngresada > hoy) return "La fecha no puede ser posterior al día de hoy.";
      return "";
    }

    case "tipoComida": {
      if (!texto) return "Debes seleccionar el tipo de comida.";
      return "";
    }

    case "descripcion": {
      if (!texto) return "La descripción de los alimentos es obligatoria.";
      if (texto.length < 10 || texto.length > 200) {
        return "La descripción debe tener entre 10 y 200 caracteres.";
      }
      return "";
    }

    case "calorias": {
      if (!texto && texto !== 0) return "Las calorías estimadas son obligatorias.";
      if (!esEntero(texto)) return "Las calorías deben ser un número entero.";
      const numero = Number(texto);
      if (numero < 100 || numero > 6000) return "Las calorías deben estar entre 100 y 6000.";
      return "";
    }

    case "vasosAgua": {
      if (!texto && texto !== 0) return "La cantidad de vasos de agua es obligatoria.";
      if (!esEntero(texto)) return "Los vasos de agua deben ser un número entero.";
      const numero = Number(texto);
      if (numero < 0 || numero > 20) return "Los vasos de agua deben estar entre 0 y 20.";
      return "";
    }

    case "actividadFisica": {
      if (!texto) return "Debes indicar si realizaste actividad física.";
      return "";
    }

    default:
      return "";
  }
}

export function validarFormulario(formulario) {
  const errores = {};
  Object.keys(formulario).forEach((campo) => {
    const error = validarCampo(campo, formulario[campo], formulario);
    if (error) errores[campo] = error;
  });
  return errores;
}
