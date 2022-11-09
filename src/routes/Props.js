import PropTypes from "prop-types";

export function Props({ firstname, lastname, age, height }) {
  return (
    <div>
      <p>Nombre: {firstname}</p>
      <p>Apellido: {lastname}</p>
      <p>Edad: {age}</p>
      <p>Altura: {height}</p>
    </div>
  );
}

export function Button({ text, name, approved }) {
  return (
    <button className={approved ? "bg-green" : "bg-red"}>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "Usuario",
};
