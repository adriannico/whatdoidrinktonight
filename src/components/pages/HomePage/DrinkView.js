import React from "react";

import "./DrinkView.css";
import { useLocation, useParams } from "react-router-dom";

import Axios from 'axios';
import {useState, Link } from 'react'
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
                
                    <Col md={3}>
                    <h1>{drink?.strDrink} </h1>
                        <p className="drinktype">{drink?.strAlcoholic}</p>
                    </Col>
                    <Col md={4}>
                       <i class="fa-solid fa-champagne-glass"></i> <p> {drink?.strGlass}</p>
                    </Col>
                    <hr></hr>
                </Row>
                <Row>
                    <Col md={3}>
                       <img className="drinkViewImage img-fluid" src={drink?.strDrinkThumb} alt={drink?.strDrink}/> 
                    </Col>
                    <Col md={5}>
                        <p>{drink?.strInstructions}</p>
                    </Col>
                    <Col md={2}>
                        <div className="ingredients">
                            <ul>
                            <p>{drink?.strIngredient1}</p>     
                            <p>{drink?.strIngredient2}</p>
                            <p>{drink?.strIngredient3}</p>
                            <p>{drink?.strIngredient4}</p>
                            <p>{drink?.strIngredient5}</p>
                            <p>{drink?.strIngredient6}</p>
                            </ul>
                        </div>         
                        
                    </Col>
                    <Col md={2}>
                        <div>
                            <ul>
                            <p>{drink?.strIngredient6}</p>
                            <p>{drink?.strIngredient7}</p>     
                            <p>{drink?.strIngredient8}</p>
                            <p>{drink?.strIngredient9}</p>
                            <p>{drink?.strIngredient10}</p>
                            <p>{drink?.strIngredient11}</p>
                            <p>{drink?.strIngredient12}</p>
                            </ul>
                            

                        </div>         
                        
                    </Col>
    
                </Row>



           
        </Container>

        </div>
        



    )




}