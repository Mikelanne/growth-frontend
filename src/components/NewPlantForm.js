import { Component } from "react";
import Form from "react-bootstrap/form"
import {createPlant} from '../actions/plantActions'
import { connect } from 'react-redux'

class NewPlantForm extends Component {

    state = {
        nickname: "",
        name: "",
        careLevel: "",
        light: "",
        water: "",
        soil: "",
        toxicToPets: false,
    }

    handleChange = (event) => {
        console.log(event)
        
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()

        this.props.createPlant(this.state)

        this.setState({
            nickname: "",
            name: "",
            careLevel: "",
            light: "",
            water: "",
            soil: "",
            toxicToPets: false,
        })
    }


    render(){
        return (
            <Form className="plant-form" onSubmit={this.handleOnSubmit}>
            <Form.Group>
                <Form.Label>Nickname</Form.Label><br />
                    <input type="text" name="nickname" value={this.state.nickname} onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                    You can name your plant whatever you want!
                </Form.Text>
            </Form.Group>
                
            <Form.Group>
                <Form.Label>Name</Form.Label><br />
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                    This is the space for the plant's actual name.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Care Level</Form.Label><br />
                    <input type="text" name="careLevel" value={this.state.careLevel} onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                    Beginner, Moderate, or Advanced.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Light</Form.Label><br />
                    <input type="text" name="light" value={this.state.light} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Water</Form.Label><br />
                    <input type="text" name="water" value={this.state.water} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Soil</Form.Label><br />
                    <input type="text" name="soil" value={this.state.soil} onChange={this.handleChange}/>
            </Form.Group>

            {/* <Form.Group>
                <Form.Label>Check this box if the plant is poisonous to pets</Form.Label><br />
                    <input type="checkbox" name="toxicToPets" value={this.state.toxicToPets} onChange={this.handleChange}/>
            </Form.Group> */}
            
             <input type="submit" value="Add Plant"/>
    
            </Form>
        )
    }
}

export default connect(null, {createPlant})(NewPlantForm)