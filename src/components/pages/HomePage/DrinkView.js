import React from "react";

import "./DrinkView.css";
import { useLocation } from "react-router-dom";
import {useState} from "react-dom";


export default function DrinkView(props){
    // const drink = useLocation();
    const {from} = location.state;

    const [drink, setDrink] = useState()

    

    return(
        <div className="page">
            <div className="grid-container">
                <div className="grid-item header">
                    <h1>Drink name: {location.name}</h1>
                </div>
                <div className="grid-item">
                    <p>SAMPLE TEXT</p>
                </div>
                <div className="grid-item">
                    <p>SAMPLE TEXT</p>
                </div>
                <div className="grid-item">
                    <p>SAMPLE TEXT</p>
                </div>
                <div className="grid-item">
                    <p>SAMPLE TEXT</p>
                </div>


            </div>
            




        </div>



    )




}