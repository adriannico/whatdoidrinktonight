
import Axios from 'axios'
import React, { useEffect, useState } from "react";
import "./Random.css"



function Random() {

    const [drinkName, setDrinkName] = useState("");
    const [drinkIns, setDrinkIns] = useState("");
    const [drinkImg, setDrinkImg] = useState("");

    // INGREDIENTS
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
    const [drinkIng11, setDrinkIng11] = useState("");
    const [drinkIng12, setDrinkIng12] = useState("");

    // MEASURES OF EACH INGREDIENT

    const [drinkMs1, setDrinkMs1] = useState("");
    const [drinkMs2, setDrinkMs2] = useState("");
    const [drinkMs3, setDrinkMs3] = useState("");
    const [drinkMs4, setDrinkMs4] = useState("");
    const [drinkMs5, setDrinkMs5] = useState("");
    const [drinkMs6, setDrinkMs6] = useState("");
    const [drinkMs7, setDrinkMs7] = useState("");
    const [drinkMs8, setDrinkMs8] = useState("");
    const [drinkMs9, setDrinkMs9] = useState("");
    const [drinkMs10, setDrinkMs10] = useState("");
    const [drinkMs11, setDrinkMs11] = useState("");
    const [drinkMs12, setDrinkMs12] = useState("");

    

    

    const getRandomDrink = () =>{
        Axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
        (response) => {
            console.log(response);
            setDrinkName(response.data.drinks[0].strDrink)
            setDrinkIns(response.data.drinks[0].strInstructions)
            setDrinkImg(response.data.drinks[0].strDrinkThumb)
            // INGREDIENT
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
            setDrinkIng11(response.data.drinks[0].strIngredient11)
            setDrinkIng12(response.data.drinks[0].strIngredient12)
            // MEASUREMENT
            setDrinkMs1(response.data.drinks[0].strMeasure1)
            setDrinkMs2(response.data.drinks[0].strMeasure2)
            setDrinkMs3(response.data.drinks[0].strMeasure3)
            setDrinkMs4(response.data.drinks[0].strMeasure4)
            setDrinkMs5(response.data.drinks[0].strMeasure5)
            setDrinkMs6(response.data.drinks[0].strMeasure6)
            setDrinkMs7(response.data.drinks[0].strMeasure7)
            setDrinkMs8(response.data.drinks[0].strMeasure8)
            setDrinkMs9(response.data.drinks[0].strMeasure9)
            setDrinkMs10(response.data.drinks[0].strMeasure10)
            setDrinkMs11(response.data.drinks[0].strMeasure11)
            setDrinkMs12(response.data.drinks[0].strMeasure12)
            


            
        }
    );  
};
    return (
        <div className = "page">

        <div className = "container">
            <div className="grid-container">
                <div className="grid-item">
                    <h1><b>{drinkName}</b></h1>

                    <h2>{drinkMs1} {drinkIng1}</h2>
                        <h2>{drinkMs2} {drinkIng2}</h2>
                        <h2>{drinkMs3} {drinkIng3}</h2>
                        <h2>{drinkMs4} {drinkIng4}</h2>
                        <h2>{drinkMs5} {drinkIng5}</h2>
                        <h2>{drinkMs6} {drinkIng6}</h2>
                        <h2>{drinkMs7} {drinkIng7}</h2>
                        <h2>{drinkMs8} {drinkIng8}</h2>
                        <h2>{drinkMs9} {drinkIng9}</h2>
                        <h2>{drinkMs10} {drinkIng10}</h2>
                        <h2>{drinkMs11} {drinkIng11}</h2>
                        <h2>{drinkMs12} {drinkIng12}</h2>
                        <h3 className="instructions">{drinkIns}</h3>
                      
                </div>
                <div className="grid-item">
                <img className="thumbnail" src={drinkImg}/>
                </div>
                <div className="grid-item buttondiv">
                    <button className="randomButton" buttonStyle="btn--large" onClick={getRandomDrink}>Trykk for drink!</button> 
                </div>
                
            




            </div>
            
            
        </div>
        <div className="drink-name">

        </div>
        </div>
    )
}

export default Random
