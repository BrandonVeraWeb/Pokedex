import { useEffect, useState } from "react";
import style from "./card.module.scss";
import axios from "axios";
import { URL_POKEMON } from "../../../api/apiRest";
function Card({ card }) {
  const [itemPokemon, setItemPokemon] = useState({});
  console.log(itemPokemon);

  useEffect(() => {
    const dataPokemon = async () => {
      const api = await axios.get(`${URL_POKEMON}/${card.name}`);
      setItemPokemon(api.data);
    };
    dataPokemon();
  }, []);
  return (
    <div>
      <img
        src={itemPokemon?.sprites?.other["official-artwork"]?.front_default}
        alt="pokemon"
      />
      <div>
        <strong>011</strong>
        <strong>name</strong>
        <h4>10cms</h4>
        <h4>weight</h4>
        <h4>brand</h4>
      </div>
    </div>
  );
}

export default Card;
