//this cannot be functional. this will be in charge of the local state for the plants. make another file for plants that will be functional and display this component

import React, { Component } from 'react';
import PlantCardBack from "./PlantCardBack"

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
            <div className='plant-card'>
                <h3>{this.state.nickname}</h3><br/>
                <h1>{this.state.name}</h1>
            </div>
        )
    }


}

export default PlantCard