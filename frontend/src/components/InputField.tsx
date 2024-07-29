const InputField: React.FC<InputProps> = ({
  type,
  id,
  extraClass,
  value,
  placeholder,
  changeHandler,
}) => {
  const style = 'p-2 rounded-full focus:outline-none ' + extraClass;

  return (
    <input
      type={type}
      id={id}
      className={style}
      value={value}
      placeholder={placeholder}
      onChange={changeHandler}
      required
    />
  );
};

export default InputField;
