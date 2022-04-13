//1 - Importações do React
import { useState, useEffect } from "react";

//2 - Importações do Componente
import { Card } from "../../components/Card/card";
import { data } from "../../components/Mocks/data";

//3 - Importações do CSS
import "./home.css";

export function Home() {
  //Toda vez que carrega a page mostre esses caracteres:
  const [characters, setCharacters] = useState([]);
  // é um array de objetos = array iterável

  //Fica verificando p DATA e renderiza a page automaticamente qdo ha alterações nos cadastros sem precisar recarregar a página.
  useEffect(() => {
    setCharacters(data);
  }, []);

  return (
    <>
      <section className="cards-home">
        {characters.map((char) => {
          return (
            <Card
              key={`char_${char._id}`}
              id={char._id}
              name={char.name}
              house={char.house}
              image={char.image}
              actor={char.actor}
            />
          );
        })}
      </section>
    </>
  );
}
