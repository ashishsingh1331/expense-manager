/* eslint-disable react/prop-types */
const Button = ({ children, onClick, variant }) => {
  let buttonClass;

  switch (variant) {
    case "primary":
      buttonClass = "bg-blue-500 hover:bg-blue-700 text-white";
      break;
    case "secondary":
      buttonClass = "bg-gray-500 hover:bg-gray-700 text-white";
      break;
    case "success":
      buttonClass = "bg-green-500 hover:bg-green-700 text-white";
      break;
    case "danger":
      buttonClass = "bg-red-500 hover:bg-red-700 text-white";
      break;
    default:
      buttonClass = "bg-blue-500 hover:bg-blue-700 text-white";
  }

  return (
    <button
      onClick={onClick}
      className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${buttonClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
