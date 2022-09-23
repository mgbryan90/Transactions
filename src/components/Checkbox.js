function Checkbox({ name, checked, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={checked}
      />
      {name}
    </label>
  );
}

export default Checkbox;
