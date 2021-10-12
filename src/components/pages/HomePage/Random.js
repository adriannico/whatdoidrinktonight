
import Axios from 'axios'
import React, { useEffect, useState } from "react";
import "./Random.css"


function Random() {

    const [drinkName, setDrinkName] = useState("");
    const [drinkIns, setDrinkIns] = useState("");
    const [drinkImg, setDrinkImg] = useState("");
    const [drinkIng1, setDrinkIng1] = useState("");
    const [drinkIng2, setDrinkIng2] = useState("");
    const [drinkIng3, setDrinkIng3] = useState("");
    const [drinkIng4, setDrinkIng4] = useState("");
    const [drinkIng5, setDrinkIng5] = useState("");
    const [drinkIng6, setDrinkIng6] = useState("");
    const [drinkIng7, setDrinkIng7] = useState("");
    const [drinkIng8, setDrinkIng8] = useState("");
    const [drinkIng9, setDrinkIng9] = useState("");
    const [drinkIng10, setDrinkIng10] = useState("");
    

    const getRandomDrink = () =>{
        Axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
        (response) => {
            console.log(response);
            setDrinkName(response.data.drinks[0].strDrink)
            setDrinkIns(response.data.drinks[0].strInstructions)
            setDrinkImg(response.data.drinks[0].strDrinkThumb)
            setDrinkIng1(response.data.drinks[0].strIngredient1)
            setDrinkIng2(response.data.drinks[0].strIngredient2)
            setDrinkIng3(response.data.drinks[0].strIngredient3)
            setDrinkIng4(response.data.drinks[0].strIngredient4)
            setDrinkIng5(response.data.drinks[0].strIngredient5)
            setDrinkIng6(response.data.drinks[0].strIngredient6)
            setDrinkIng7(response.data.drinks[0].strIngredient7)
            setDrinkIng8(response.data.drinks[0].strIngredient8)
            setDrinkIng9(response.data.drinks[0].strIngredient9)
            setDrinkIng10(response.data.drinks[0].strIngredient10)

            
        }
    );  
};
    return (
        <div className = "page">

        <div className = "container">
            <div className="grid-container">
                <div className="grid-item">
                    <h1><b>{drinkName}</b></h1>
                    
                    

                </div>
                <div className="grid-item">
                    <img >{}</img>
                </div>
                <div className="grid-item">
                    <ul>
                      
                        
                        <li>{drinkIng1}</li>
                    
                        
                        <li>{drinkIng2}</li>
                        <li>{drinkIng3}</li>
                        <li>{drinkIng4}</li>
                        <li>{drinkIng5}</li>
                        <li>{drinkIng6}</li>
                        <li>{drinkIng7}</li>
                        <li>{drinkIng8}</li>
                        <li>{drinkIng9}</li>
                        <li>{drinkIng10}</li>



                    </ul>
                    <h2>{drinkIns}</h2>
                </div>
                <div className="grid-item">
                    <h1>Ingreidens</h1>
                </div>
                <div className="grid-item">
                    <button onClick={getRandomDrink}>Trykk for drink!</button>
                </div>




            </div>
            
            
        </div>
        <div className="drink-name">

        </div>
        </div>
    )
}

export default Random
