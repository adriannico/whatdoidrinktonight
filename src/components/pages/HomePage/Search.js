import React from 'react'
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

    



    var drinks = null;

    const searchForDrinks = () =>{
        searchText = document.getElementById("inputfield").value;
        Axios.get('https://thecocktaildb.com/api/json/v1/1/search.php?s='+searchText).then(
            (response) => {
                console.log(response.data.drinks);
                drinks = response.data.drinks;
                const cards = drinks.map(drink => {
                    return <DrinkCard 
                    name={drink.strDrink}
                    instructions={DOMStringList.strIns}
                    ></DrinkCard>
                })

                }
        )
    }

    


    return (
            <div className="">
                <SearchBar></SearchBar>
                
            </div>
            
       
    )
}



export default Search
