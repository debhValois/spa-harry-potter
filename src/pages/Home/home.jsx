//1 - Importações do React
import { useState } from "react";
//2 - Importações do Componente 
import { Card } from "../../components/Card/card";
import { data } from "../../components/Mocks/data"
//3 - Importações do CSS
import "./home.css";


export function Home() {
  //Toda vez que carrega a page mostre esses caracteres:
  const [characters, setCharacters] = useState(data);
  // é um array de objetos = array iterável
  return (
    <>
      <Card />
    </>
  );
}

