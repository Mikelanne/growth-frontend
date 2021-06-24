//this cannot be functional. this will be in charge of the local state for the plants. make another file for plants that will be functional and display this component

import React, { Component } from 'react';
import PlantCardBack from "./PlantCardBack"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import plantReducer from '../reducers/plantReducer';
import Card from 'react-bootstrap/Card'

class PlantCard extends Component {

    state = {
        id: this.props.id,
        nickname: this.props.nickname,
        name: this.props.name,
        careLevel: this.props.careLevel,
        light: this.props.light,
        water: this.props.water,
        soil: this.props.soil,
        toxicToPets: this.props.toxicToPets
    }

    //create the way I am going to display the plants
    //i eventually want an image but I might have to add that in later with a little refactor, although thats going to be a hot mess.
    //I also want to initally display the nickname.
    //would like to incorporate routes so that when you click on a plant it displays just that plant's information. Will be able to notate last time the plant was watered and resoiled. (maybe not that might be too tricky. Starting with the basics.)
    //having a hard time finding images for the cards. May just have to do nice styling for the name of the plant


    // this is where we can implement routes to get to the details of the card.


    render(){
        return(
            // <Router>
            // <div className="plant-card">
            //     <h3>{this.state.nickname} the {this.state.name}</h3>
            //     {/* <Link to={`/plants/${this.state.id}`}>{this.state.name}</Link> */}
            // </div>
            // </Router>
            <Card style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Title>{this.props.nickname} the {this.props.name}</Card.Title>
                    <Card.Text>
                    <b>Care level:</b> {this.props.careLevel}<br/>
                    <b>Light:</b> {this.props.light}<br/>
                    <b>Soil:</b> {this.props.soil}<br/>
                    <b>Water:</b> {this.props.water}<br/>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        )
    }


}

export default PlantCard