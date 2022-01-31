const InputField = ({ name, type = "text", label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input className="m-2" type={type} id={name} name={name} {...rest} />
      <div>{error && <div className="text-danger">{error}</div>}</div>
    </div>
  );
};

export default InputField;
