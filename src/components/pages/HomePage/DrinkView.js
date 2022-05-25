import React from "react";

import "./DrinkView.css";
import { useLocation, useParams } from "react-router-dom";

import Axios from 'axios';
import {useState } from 'react'


export default function DrinkView(){
    
    const { id } = useParams()  

    console.log("ID="+id);
    const [drink, setDrink] = useState()


    const searchForDrinks = () =>{
        Axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id).then(
            (response) => {
                console.log(response.data.drinks[0]);
                setDrink(response.data.drinks[0])
                console.log("Drink="+drink);
                 // setDrink(response.data.drinks[0]);

             }
        )
        }
        searchForDrinks(); // TODO BLIR IKKE KALT

    return(
        <div className="container">
            <div className="page">
                <div className="row">
                    <div className="col-md-4">
                       <h1>{drink?.strDrink} </h1>
                    </div>
                    <div className="col-md-4">
                        <p>Type: {drink?.strAlcoholic}</p>
                    </div>
        
                    <div className="col-md-4">
                        <p>Recommended glass: {drink?.strGlass}</p>
                    </div>
                    <hr></hr>
                </div>


            </div>
            
            
            




        </div>



    )




}