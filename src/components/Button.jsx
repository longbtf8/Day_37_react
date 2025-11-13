const Button = ({ onClick, children, ...passProp }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 p-2 cursor-pointer rounded-xl bg-blue-400"
      {...passProp}
    >
      {children}
    </button>
  );
};
export default Button;
