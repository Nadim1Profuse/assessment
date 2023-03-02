import React from "react";
import { Card, Image } from "semantic-ui-react";

const PokemonCard = (props) => (
  <Card>
    <Image
      src={props.imgUrl}
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3>{props.name}</h3>
          </div>
          <div>
            <span>
              <span>HP: </span>
              <span>{props.hp}</span>
            </span>
          </div>
        </div>
      </Card.Header>
      <br></br>
      <Card.Meta>
        <span>
          <h3>Attacks:</h3>
        </span>{" "}
        <span>{props.attacks1},</span> <span>{props.attacks2}</span>
      </Card.Meta>
      <Card.Description>
        <span>Abilities:</span>N/A
      </Card.Description>
    </Card.Content>
  </Card>
);

export default PokemonCard;
