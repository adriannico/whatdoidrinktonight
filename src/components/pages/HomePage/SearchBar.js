import React from "react"
import Button from 'react-bootstrap/Button'

export default function DrinkView(props){

    return(
        
        <div className="page">  
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <input placeholder="Seach..." id="inputfield"></input>
                        <Button className=""onClick="">Search</Button>
                    </div>
                    <div className="col-md-4">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Alcoholic</label>
                    </div>
                    <div className="col-md-4">
                        <select name="ingredient-number">
                            <option value="1">
                                1
                            </option>
                            <option value="2">
                                2
                            </option>
                            <option value="3">
                                3
                            </option>
                        </select>
                        <label class="form-check-label" for="exampleCheck1"> Number of ingredients</label>
                    </div>

                    </div>
    
            </div>
        </div>)
    





}