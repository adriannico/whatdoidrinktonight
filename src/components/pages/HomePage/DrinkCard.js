import React from "react"
import "./DrinkCard.css"
     

export default function DrinkCard(props) {

    return (
        <div className="card">
            <div className="drinkCard">
                <h1>{props.name}</h1>
                <img className="cardImage" src={props.img}/>
                {/* <p>{props.instructions.length>10 ? props.instructions : props.instructions.substring(1,10)}</p> */}
            <hr/>
                <ul>
                    <li>{props.ingredient1}</li>
                    <li>{props.ingredient2}</li>
                    <li>{props.ingredient3}</li>
                </ul>
                <input   value="More info"type="button"></input>
                

            </div>
        </div>
    )


}