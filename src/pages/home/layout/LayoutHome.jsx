import { useEffect } from "react";
import Header from "../header/Header";
import style from "./layout.module.scss";
import axios from "axios";
import { URL_POKEMON } from "../../../api/apiRest";
import { useState } from "react";
import Card from "../card/Card";

function LayoutHome() {
  const [arrayPokemon, setArrayPokemon] = useState([]);
  useEffect(() => {
    const api = async () => {
      const apiPoke = await axios.get(`${URL_POKEMON}`);
      setArrayPokemon(apiPoke.data.results);
    };
    api();
  }, []);
  return (
    <div className={style.layout}>
      <Header />
      <div>
        {arrayPokemon.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
    </div>
  );
}

export default LayoutHome;
