import React, {Component, useEffect} from "react";

import "./IngredientView.css";
import { useLocation, useParams, Link } from "react-router-dom";

import Axios from 'axios';
import {useState} from 'react'
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function IngredientView(){

 
        

        useEffect(() => {
            Axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+id).then(
            (response) => {
                if(response.data.ingredients.length > 0){
                    console.log("Ingredient searching");
                    console.log(response.data.ingredients[0].strIngredient);
                    setIngredient(response.data.ingredients[0]);
                }
                
            });
        }, []);
            
    
    const { id } = useParams();

    console.log("name="+id);
    const [ingredient, setIngredient] = useState();


        
    return(
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
    )
}