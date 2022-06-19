import React from "react";
import "./DrinkCard.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Button from "../../Button";

export default function DrinkCard(props) {
  return (
    <div className="card">
      <Link to={`/DrinkView/${props.id}`}>
      
      <div className="drinkCard">
      
        <div className="grid-item cardsection1">
          <h1 className="drink-title">{props.name}</h1>
          <hr />
          <img className="cardImage" src={props.img} />
        </div>

        <div className="grid-item cardsection2">
         
          <p className="drinkdetails">{props.category}</p>
          <p className="drinkdetails"><i class="fa-solid fa-skull-crossbones"></i> {props?.alcoholic}   </p>
          <p className="drinkdetails"><i class="fa-solid fa-martini-glass"></i> {props?.glass}</p>
          <p id="ingredient-text">
          

           
            <b>Includes:</b> {props?.ingredient1},{" "}
            {props?.ingredient2} and{" "}
            {props?.ingredient3}
          </p>
                    
        
        </div>
        <div className="grid-item">
          
        </div>
        <div className="grid-item">
          
          {/* <p>ID={props.id}</p> */}
        </div>
        
      </div>
      </Link>
     
    </div>
  );
}
