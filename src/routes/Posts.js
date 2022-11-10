const handleClick = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/luxray")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

export const Posts = () => {
  return (
    <div>
      <button onClick={handleClick}>Traer datos</button>
    </div>
  );
};
