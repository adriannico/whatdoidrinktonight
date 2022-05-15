import React, {useState } from 'react'
import Button from '../../Button'
import './Search.css'
import Axios from 'axios'
import axios from 'axios'
import SearchResult from './SearchResult'
import ReactDOM from 'react-dom'
import DrinkCard from "./DrinkCard"
import SearchBar from "./SearchBar"


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

    


    return (
        <div className="page">
            <input placeholder="Search for a drink!"id="inputfield" type="text"/>
            <input value="Search!"className="btn" onClick={searchForDrinks} type="button" placeholder="Search..." data=""/>
            <div className="results">
            {drinks.map((drink) =>(
                <DrinkCard 
                name={drink.strDrink} 
                instructions={drink.strInstructions} 
                ingredient1={drink.strIngredient1} 
                ingredient2={drink.strIngredient2}
                ingredient3={drink.strIngredient3}
                img = {drink.strDrinkThumb}></DrinkCard>
            ))}
            
            </div>

            
        </div>
        
    )
}



export default Search
