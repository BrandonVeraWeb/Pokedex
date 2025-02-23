import { useEffect, useState } from "react";
import style from "./card.module.scss";
import axios from "axios";
import { URL_POKEMON, URL_SPECIES } from "../../../api/apiRest";
function Card({ card }) {
  const [itemPokemon, setItemPokemon] = useState({});
  const [speciePokemon, setSpeciePokemon] = useState({});

  useEffect(() => {
    const dataPokemon = async () => {
      const api = await axios.get(`${URL_POKEMON}/${card.name}`);
      setItemPokemon(api.data);
    };
    dataPokemon();
  }, []);

  useEffect(() => {
    const dataPokemonS = async () => {
      const url = card.url.split("/");
      const api = await axios.get(`${URL_SPECIES}/${url[6]}`);
      setSpeciePokemon({
        url_specie: api?.data?.evolution_chain,
        data: api.data,
      });
    };
    dataPokemonS();
  }, []);
  // console.log(itemPokemon);

  let pokeId = itemPokemon?.id?.toString();

  if (pokeId?.length == 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId?.length == 2) {
    pokeId = "0" + pokeId;
  }
  return (
    <div className={style.card}>
      <img
        className={style.img_pokemon}
        src={itemPokemon?.sprites?.other["official-artwork"]?.front_default}
        alt="pokemon"
      />
      <div
        className={`bg-${speciePokemon?.data?.color?.name} ${style.sub_card}`}
      >
        <strong className={style.id_card}>{pokeId}</strong>
        <strong className={style.name_card}>{itemPokemon.name}</strong>
        <h4 className={style.height_card}>Height: {itemPokemon.height}0 Cm</h4>
        <h4 className={style.weight_card}> Weight: {itemPokemon.weight} Kg</h4>
        <h4 className={style.inhabit_card}>
          Habitat: {speciePokemon?.data?.habitat?.name}
        </h4>
        <div className={style.div_stats}>
          {itemPokemon?.stats?.map((sta, index) => {
            return (
              <h6 key={index} className={style.item_stats}>
                <span className={style.name}>{sta.stat.name}</span>
                <progress value={sta.base_stat} max={110}>
                  {" "}
                </progress>
                <span className={style.number}>{sta.base_stat}</span>
              </h6>
            );
          })}
        </div>
        <div className={style.div_type_color}>
          {itemPokemon?.types?.map((ti, index) => {
            return (
              <h6
                key={index}
                className={`color-${ti.type.name} ${style.color_type}`}
              >
                {ti.type.name}
              </h6>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
