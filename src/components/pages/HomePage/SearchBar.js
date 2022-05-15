import React from 'react'

import Random from "./Random"
import Axios from 'axios'


function SearchBar(props) {


    const searchResults = []
    
    const [resultDrinks, setResultDrinks] = React.useState("")

    const resultsShow = resultDrinks.map(drink => <p>Drink</p>)

    function handleClick() { 
        console.log("Searching for drink... ");

        const searchInput = document.getElementById("searchField").value

        Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+searchInput).then(
        (response) => { 


            setResultDrinks( prevResultDrinks => [...prevResultDrinks, response])
            console.log(response)
            const drinks = response.data.drinks;
            console.log(drinks[0].strDrink)

            const results = drinks.map(drink => {

                return 
                <div>
                    <p>Search results ({results.length})</p>
                    <hr></hr><p>results.strDrink</p >
                </div>
            })
            return results;


        });




    }


  return (
    <div className ="search">
        <div className="searchInputs"></div>
        <input id="searchField" placeholder="Search..."/>
        <button onClick={handleClick}>Search</button>


        <div className="results">
            <p></p>
        </div>
        



    </div>
    
  )
}

export default SearchBar