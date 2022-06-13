import React from 'react'

function Home() {
    return (
        <div>
            <div className="page">
                <div className="">
                    <h1>
                        WhatDoIDrinkTonight.com
                    </h1>
                    <p> Are you sick of always drinking the same thing? 😓
                        You´ve arrived at the right place!
                        Try it out!
                    </p>
                    <p><i>WhatDoIDrinkTonight</i> was created by Adrian Nilssen Nicolaisen as a solution
                        to him and his friends' weekendly dilemma; what do i drink tonight?</p>
                    <p>The website uses a free API from <a href="https://www.thecocktaildb.com/">The Cocktail DB</a>.</p>
                    <p><small>Contact me at adriannicolaisen@gmail.com.</small></p>
                    <hr/>
                    <p>
                        Keep in mind that this page is a work in progess.      
                    </p>
                    <h2 styles="font-weight: 800">Things that are planned:</h2>
                    <ul>
                        <li>Conversion from Imperial to Metric (oz to ml etc.)</li>
                        <li>Search-function</li>
                        <li>Better looking styling</li>
                        
                    </ul>

                    
                </div>
               
                
            </div>
            
        </div>
    )
}

export default Home
