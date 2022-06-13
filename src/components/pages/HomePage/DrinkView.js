import React from "react";

import "./DrinkView.css";
import { useLocation, useParams } from "react-router-dom";

import Axios from 'axios';
import {useState, Link } from 'react'
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




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
                    </Col>
                        
                    
                </Row>
                <Row>
                    <Col md={6}>
                        <p className="drinkdetails">{drink?.strCategory} - {drink?.strAlcoholic}   </p>
                        <p className="drinkdetails"><i class="fa-solid fa-martini-glass-empty"></i> {drink?.strGlass}</p>
                    </Col>
                    
                  

                </Row>
                <hr></hr>
                <Row>
                    <Col md={3}>
                       <img className="drinkViewImage img-fluid" src={drink?.strDrinkThumb} alt={drink?.strDrink}/> 
                    </Col>
                    
                    <Col md={9}>
                    <Row>
                       
                        
                        
                            <Col md={4}>
                                
                                <div className="ingredients">
                                    <p><b>{drink?.strMeasure1} {drink?.strIngredient1}</b></p>
                                    <p><b>{drink?.strMeasure3} {drink?.strIngredient3}</b></p>
                                    <p><b>{drink?.strMeasure5} {drink?.strIngredient5}</b></p>
                                    <p><b>{drink?.strMeasure7} {drink?.strIngredient7}</b></p>
                                    <p><b>{drink?.strMeasure9} {drink?.strIngredient9}</b></p>
                                    <p><b>{drink?.strMeasure11} {drink?.strIngredient11}</b></p>
                                </div>
                             
                            
                            </Col>
                            <Col md={4}>
                                <div className="ingredients">
                                    <p><b>{drink?.strMeasure2} {drink?.strIngredient2}</b></p>
                                    <p><b>{drink?.strMeasure4} {drink?.strIngredient4}</b></p>
                                    <p><b>{drink?.strMeasure6} {drink?.strIngredient6}</b></p>
                                    <p><b>{drink?.strMeasure8} {drink?.strIngredient8}</b></p>
                                    <p><b>{drink?.strMeasure10} {drink?.strIngredient10}</b></p>
                                    <p><b>{drink?.strMeasure12} {drink?.strIngredient12}</b></p>
                            </div>
                            
                            </Col>
                         
                    </Row>
                        <Row>
                        
                            <Col md={12}> <p>{drink?.strInstructions}</p></Col>
                        </Row>
                        
                        
                       
                        
                        
                        
                    </Col>
                    
                     <Col md={2}>
                             
                        
                    </Col>
                    
               
                   
    
                </Row>
                



           
        </Container>

        </div>
        



    )




}