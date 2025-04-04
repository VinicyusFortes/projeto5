function FormSelect({ label, name, value, onChange, options = [] }) {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          Selecione...
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
