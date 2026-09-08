# NutriTrack

**Estudiante:** Jacobo Gonzalez Villegas
**Grupo:** Globant — **Programa:** Desarrollo de Software — **Institución:** Cesde

## Descripción

Aplicación web hecha en React (con Vite) para el registro diario de alimentación de los
usuarios de NutriTrack. Permite diligenciar un formulario con 10 campos validados
manualmente en JavaScript y, si el registro es válido, muestra una vista de cuidado
nutricional con un resumen y recomendaciones calculadas a partir de los datos ingresados.

La app cuenta con 3 rutas manejadas con React Router DOM:

- `/` — Formulario de registro de comidas del día.
- `/cuidado-nutricional` — Resumen del registro y recomendaciones.
- `/acerca-de` — Información del programador.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Luego abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Campos del formulario y reglas de validación

| Campo | Reglas |
|---|---|
| Nombre completo | Obligatorio. Mínimo 3 caracteres. Solo letras y espacios (con tildes y ñ). |
| Correo electrónico | Obligatorio. Formato de correo válido. |
| Edad | Obligatorio. Entero entre 5 y 100. |
| Peso (kg) | Obligatorio. Número entre 20 y 300, máximo un decimal. |
| Fecha del registro | Obligatorio. No puede ser una fecha futura. |
| Tipo de comida principal | Obligatorio. Desayuno / Almuerzo / Cena / Refrigerio. |
| Descripción de los alimentos | Obligatorio. Entre 10 y 200 caracteres. |
| Calorías estimadas | Obligatorio. Entero entre 100 y 6000. |
| Vasos de agua consumidos | Obligatorio. Entero entre 0 y 20. |
| ¿Realizó actividad física? | Obligatorio. Sí / No. |

Las validaciones están implementadas manualmente en [`src/utils/validaciones.js`](src/utils/validaciones.js),
sin usar librerías como Formik, React Hook Form, Yup o Zod.

## Extras implementados

- Validación en tiempo real (el error se recalcula al escribir y al salir del campo con `onBlur`).
- Persistencia del último registro en `localStorage`, para que sobreviva a recargar la página.
- Ruta `*` con página 404 propia y enlace de regreso al inicio.
- Diseño adaptable a dispositivos móviles.
