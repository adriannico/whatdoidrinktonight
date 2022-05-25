import React from "react";
import "./DrinkCard.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Button from "../../Button";

export default function DrinkCard(props) {
  return (
    <div className="card">
      <div className="drinkCard">
        <div className="grid-item cardsection1">
          <h1 className="drink-title">{props.name}</h1>
          <hr />
          <img className="cardImage" src={props.img} />
        </div>

        <div className="grid-item cardsection2">
          <h1>Instructions:</h1>
          <p>{props.instructions}</p>
        </div>
        <div className="grid-item">
          <Link to={`/DrinkView/${props.id}`}>
            <Button
              className="btn-primary"
              value="More info"
              type="button"
            >
              More info
            </Button>
          </Link>
        </div>
        <div className="grid-item">
          <p id="ingredient-text">
            <b>Includes:</b> {props.ingredient1},{" "}
            {props.ingredient2.toLowerCase()} and{" "}
            {props.ingredient3.toLowerCase()}
          </p>
          <p>ID={props.id}</p>
        </div>
      </div>
    </div>
  );
}
