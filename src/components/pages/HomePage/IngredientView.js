import React, {Component, useEffect} from "react";

import "./IngredientView.css";
import { useLocation, useParams, Link } from "react-router-dom";

import Axios from 'axios';
import {useState} from 'react'
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import DrinkCard from "./DrinkCard"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function IngredientView(){


        useEffect(() => {
            // Search for inrgedient
            Axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+id).then(
            (response) => {
                if(response.data.ingredients.length > 0){
                    setIngredient(response.data.ingredients[0]);
                }
                

            }
            
            );
            // Search for drinks with the ingredient
            Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+id).then(
                (response) => {
                    if(response.data.drinks.length > 0){
                        console.log(response.data.drinks)
                        setRelatedDrinks(response.data.drinks);
                    }
                    
    
                }   
                
                );


        }, []);
            
    
    const { id } = useParams();

    console.log("name="+id);
    const [ingredient, setIngredient] = useState();
    const [relatedDrinks, setRelatedDrinks] = useState([])


        
    return(
        <>
        <div className="page">
            <Container>
                <Row>
                    <Col md={3}>
                    <h1>{
                    ingredient?.strIngredient.charAt(0).toUpperCase() + ingredient?.strIngredient.slice(1)} </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <p className="ingredientdetails"><i class="fa-solid fa-arrow-right-long"></i> Type: {ingredient?.strType}</p>
                        <p className="ingredientdetails"><i class="fa-solid fa-skull-crossbones"></i> Alcohol: {ingredient?.strAlcohol} </p>
                        <p className="ingredientdetails"><i class="fa-solid fa-percent"></i> ABV: {ingredient?.strABV}</p>
                        {/* <p className="ingredientdetails"><i class="fa-solid fa-martini-glass-empty"></i> {drink?.strGlass}</p> */}
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col md={3}>
                       <img className="ingredientViewImage img-fluid" src={`https://www.thecocktaildb.com/images/ingredients/${ingredient?.strIngredient}.png`} alt={ingredient?.strIngredient}/> 

                    </Col>
                    
                    <Col md={9}>
                    <Row>
                       
                            <Col md={12}> 
                            <p className="ingredientdetails">{ingredient?.strDescription} -</p>
                            </Col>
                            <Col md={4}>
                            </Col>
                    </Row>
                        <Row>  
                        </Row>
                    </Col>
                     <Col md={2}>
                    </Col>
                    
                </Row>
                



           
            </Container>

        </div>
        <div className="page">
            <h1>Related drinks</h1>
            <div className="results">
            { 
            relatedDrinks.map((drink) =>(
                <DrinkCard 
                id={drink?.idDrink}
                name={drink?.strDrink} 
                instructions={drink?.strInstructions} 
                ingredient1={drink?.strIngredient1} 
                ingredient2={drink?.strIngredient2}
                ingredient3={drink?.strIngredient3}
                img = {drink?.strDrinkThumb}
                category = {drink?.strCategory}
                alcoholic = {drink?.strAlcoholic}
                glass = {drink?.strGlass}></DrinkCard>
            ))
            
            }
            
        </div>
        </div>
        </>
    )
}