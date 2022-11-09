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
