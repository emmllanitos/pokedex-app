import { useState, useEffect } from "react";
import { GiYinYang } from "react-icons/gi";

const handleClick = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/luxray")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

export const Posts = () => {
  return (
    <div>
      <button onClick={handleClick}>
        <GiYinYang />
        Traer datos
      </button>
    </div>
  );
};

export const MapPoke = () => {
  const apiPoke = [
    { id: 1, name: "Edwar" },
    { id: 2, name: "Roque" },
    { id: 3, name: "Monica" },
  ];

  const salida = apiPoke.map((poke, i) => {
    return (
      <div key={i}>
        <h1>ID: {poke.id}</h1>
        <h3>Nombre: {poke.name}</h3>
      </div>
    );
  });

  return <div>{salida}</div>;
};

export const UsoUseState = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Cargue " + contador + " del useEffect");
  }, [contador]);

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Restar
      </button>
    </>
  );
};
