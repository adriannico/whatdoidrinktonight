import React from 'react'
import Button from '../../Button'
import './Search.css'
import Axios from 'axios'
import axios from 'axios'
import SearchResult from './SearchResult'
import ReactDOM from 'react-dom'


var searchText = ""

var searchResults




function Search() {
    return (
        <div className="page">
            <div className="container">
                <h1>Search for a drink:</h1>
                <input id="inputfield"></input>
                <Button onClick={searchForDrink}>Search</Button>
                <div id="searchResults">
                
                </div>
                
            </div>
            
        </div>
    )
}

const searchForDrink = () =>{
    searchText = document.getElementById("inputfield").value;
    
    Axios.get('https://thecocktaildb.com/api/json/v1/1/search.php?s='+searchText).then(
        (response) => {

            if(response.data.drinks.length = 0 || response.data.drinks.length == null){
                document.getElementById("searchResults").innerHTML = "Fant ingen";
            } else{
                document.getElementById("searchResults").innerHTML = response.data.drinks[0].strDrink;
            }
            
          

            
           

            
            
   
        
        }
    )
}

export default Search
