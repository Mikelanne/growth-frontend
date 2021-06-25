//this cannot be functional. this will be in charge of the local state for the plants. make another file for plants that will be functional and display this component

import React, { Component } from 'react';
import PlantCardBack from "./PlantCardBack"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import plantReducer from '../reducers/plantReducer';
import Card from 'react-bootstrap/Card'

const PlantCard = (props) => {

    //create the way I am going to display the plants
    //i eventually want an image but I might have to add that in later with a little refactor, although thats going to be a hot mess.
    //I also want to initally display the nickname.
    //would like to incorporate routes so that when you click on a plant it displays just that plant's information. Will be able to notate last time the plant was watered and resoiled. (maybe not that might be too tricky. Starting with the basics.)
    //having a hard time finding images for the cards. May just have to do nice styling for the name of the plant


    // this is where we can implement routes to get to the details of the card.

        return(
            <Card style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Title>{props.nickname} the {props.name}</Card.Title>
                    <Card.Text>
                    <b>Care level:</b> {props.careLevel}<br/>
                    <b>Light:</b> {props.light}<br/>
                    <b>Soil:</b> {props.soil}<br/>
                    <b>Water:</b> {props.water}<br/>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        )

}

export default PlantCard

// don't need state unless its being updated