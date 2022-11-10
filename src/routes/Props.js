import PropTypes from "prop-types";

export const Props = ({ firstname, lastname, age, height }) => {
  return (
    <div>
      <p>Nombre: {firstname}</p>
      <p>Apellido: {lastname}</p>
      <p>Edad: {age}</p>
      <p>Altura: {height}</p>
    </div>
  );
};

export const Button = ({ text, name, approved }) => {
  return (
    <button className={approved ? "bg-green" : "bg-red"}>
      {text} - {name}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "Usuario",
};

const handleClick = (e) => {
  console.log(e);
  console.log("enviado");
};

export const Button2 = ({ text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
