import React from "react"


export default function DrinkCard(props) {

    return (
        <div className="card">
            <div>
                <h1>{props.name}</h1>
                <p>Test</p>
                <p>{props.instructions}</p>

            </div>
        </div>
    )


}