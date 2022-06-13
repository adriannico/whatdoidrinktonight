import React, {useState } from 'react'
import Button from '../../Button'
import './Search.css'
import Axios from 'axios'
import axios from 'axios'
import SearchResult from './SearchResult'
import ReactDOM from 'react-dom'
import DrinkCard from "./DrinkCard"
import SearchBar from "./SearchBar"
import { Form,FormCheck, Radio, ControlLabel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";





import {Container, Row, Col} from "react-bootstrap";
import { useNavigate, Redirect } from "react-router-dom";


var searchText = ""

var searchResults






function Search() {


    let drinkResult = ""
    
    const [drinks, setDrinks] = useState([])

    const searchForDrinks = () =>{
        searchText = document.getElementById("inputfield").value;
        Axios.get('https://thecocktaildb.com/api/json/v1/1/search.php?s='+searchText).then(
            (response) => {
                console.log(response.data.drinks);

                setDrinks(response.data.drinks);
                
                }
        )
    }

    const getRandomDrink = () =>{
        Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(
            (response) => {
                console.log(response.data.drinks);
                setDrinks(response.data.drinks);

                return <Redirect to={`/DrinkView/${response.data.drinks[0].id}`}></Redirect>;
                
             
                
                }
        )
    }

    return (
        <div className="page">
            <Container>
                <Row>
                    <Col md={12} sm={12}>
                        <div>
                            <Form.Label>Name</Form.Label>
                            <Form.Control id="inputfield" placeholder="Search for a drink...  ">
                            </Form.Control>
                            
                        </div>
                    </Col>
                    
            </Row>
            <Row>
                <Col md={12}>
                    <Button value="Search!" className="btn-primary" onClick={searchForDrinks} type="button" placeholder="Search..." data="">Search</Button>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                
                    <Button className="btn-primary" value="More info" type="button" onClick={getRandomDrink}
                        >
                    Random drink!
                    </Button>
                
            </Col>
            </Row>
   
            

            


            </Container>
           
            
            

            {/* <div className="search-options-container">
                <input className="grid-item" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <input className="grid-item" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <input className="grid-item form-text" placeholder="Search for a drink!"id="inputfield" type="text"/>
                <select class="form-select" name="languages" id="lang">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
      </select>
            </div> */}

            <Form>
            </Form>
            
            <div className="results">
            { 
            
            drinks.map((drink) =>(
                <DrinkCard 
                id={drink.idDrink}
                name={drink.strDrink} 
                instructions={drink.strInstructions} 
                ingredient1={drink.strIngredient1} 
                ingredient2={drink.strIngredient2}
                ingredient3={drink.strIngredient3}
                img = {drink.strDrinkThumb}
                category = {drink.strCategory}
                alcoholic = {drink.strAlcoholic}
                glass = {drink.strGlass}></DrinkCard>
            ))
            
            
            }
            
            </div>

            
        </div>
        
    )
}



export default Search
