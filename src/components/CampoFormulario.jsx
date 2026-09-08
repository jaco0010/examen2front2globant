

function CampoFormulario({
  id,
  label,
  tipo = "text",
  valor,
  error,
  onChange,
  onBlur,
  opciones = [],
}) {
  const claseControl = error ? "campo-control campo-error" : "campo-control";

  return (
    <div className="campo-formulario">
      <label htmlFor={id}>{label}</label>

      {tipo === "select" && (
        <select id={id} name={id} value={valor} onChange={onChange} onBlur={onBlur} className={claseControl}>
          <option value="">-- Selecciona una opción --</option>
          {opciones.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      )}

      {tipo === "textarea" && (
        <textarea
          id={id}
          name={id}
          value={valor}
          onChange={onChange}
          onBlur={onBlur}
          className={claseControl}
          rows={4}
        />
      )}

      {tipo === "radio" && (
        <div className={`campo-radios ${error ? "campo-error" : ""}`}>
          {opciones.map((opcion) => (
            <label key={opcion.valor} className="radio-opcion">
              <input
                type="radio"
                name={id}
                value={opcion.valor}
                checked={valor === opcion.valor}
                onChange={onChange}
                onBlur={onBlur}
              />
              {opcion.texto}
            </label>
          ))}
        </div>
      )}

      {!["select", "textarea", "radio"].includes(tipo) && (
        <input
          id={id}
          name={id}
          type={tipo}
          value={valor}
          onChange={onChange}
          onBlur={onBlur}
          className={claseControl}
        />
      )}

      {error && <p className="mensaje-error">{error}</p>}
    </div>
  );
}

export default CampoFormulario;
