import React from "react";

import "./DrinkView.css";
import { useLocation, useParams } from "react-router-dom";

import Axios from 'axios';
import {useState } from 'react'
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <div className="page">
            <Container>
                <Row>
                    <Col md={4}>
                       <h1>{drink?.strDrink} </h1>
                    </Col>
                    <Col md={4}>
                        <p>Type: {drink?.strAlcoholic}</p>
                    </Col>
                    <Col md={4}>
                        <p>Recommended glass: {drink?.strGlass}</p>
                    </Col>
                    <hr></hr>
                </Row>
                <Row>
                    <Col md={4}>
                       <img className="drinkViewImage" src={drink?.strDrinkThumb} alt={drink?.strDrink}/> 
                    </Col>
                    <Col md={4}>
                        <p>Type: {drink?.strAlcoholic}</p>
                    </Col>
        
                    <Col md={4}>
                        <p>Recommended glass: {drink?.strGlass}</p>
                    </Col>
                </Row>



           
        </Container>

        </div>
        



    )




}