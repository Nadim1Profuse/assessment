import React, { useEffect, useState } from "react";
import PokemonCard from "./Card";
import { Grid } from "semantic-ui-react";

const Listing = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchAsynchData = async () => {
    const res = await fetch(
      "https://api.pokemontcg.io/v2/cards?page=1&pageSize=30"
    );
    const data = await res.json();
    if (data && data.data) {
      setPokemons(data.data);
    }
  };

  console.log("pokemons data", pokemons);

  useEffect(() => {
    fetchAsynchData();
  }, []);

  return (
    <>
      <div style={{ margin: "2rem", padding: "auto" }}>
        <Grid columns="three" divided="vertically">
          {pokemons.map((pok) => {
            console.log("attacks", pok.attacks[0].name);

            return (
              <Grid.Column key={pok.id}>
                <PokemonCard
                  imgUrl={pok.images.large}
                  name={pok.name}
                  hp={pok.hp}
                  attacks1={pok.attacks[0].name}
                  abilites="N/A"
                />
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Listing;
