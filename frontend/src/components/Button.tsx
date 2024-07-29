const Button: React.FC<ButtonType> = ({
  text,
  variant,
  extraClass,
  clickHandler,
}) => {
  const btnVariant = {
    primary: 'bg-blue-900',
    danger: 'bg-red-900',
  };

  const orgClass =
    'hover:scale-105 text-sm sm:text-xl rounded-full px-4 py-2 ' +
    btnVariant[variant] +
    ' ' +
    extraClass;

  return (
    <button onClick={clickHandler} className={orgClass}>
      {text}
    </button>
  );
};

export default Button;
