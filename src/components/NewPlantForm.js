import { Component } from "react";
import Form from "react-bootstrap/form"
import {createPlant} from '../actions/plantActions'
import { connect } from 'react-redux'

class NewPlantForm extends Component {

    state = {
        nickname: "",
        name: "",
        difficulty: "",
        light: "",
        water: "",
        soil: "",
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        }, console.log(this.state))
    }
      

    handleOnSubmit = (event) => {
        event.preventDefault()

        this.props.createPlant(this.state)

        this.setState({
            nickname: "",
            name: "",
            difficulty: "",
            light: "",
            water: "",
            soil: ""
        })
    }


    render(){
        return (
            <Form className="plant-form" onSubmit={this.handleOnSubmit}>
            <Form.Group>
                <Form.Label className="label">Nickname</Form.Label><br />
                    <input type="text" name="nickname" value={this.state.nickname} onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                    You can name your plant whatever you want!
                </Form.Text>
            </Form.Group>
                
            <Form.Group>
                <Form.Label className="label">Name</Form.Label><br />
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                    This is the space for the plant's actual name.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label className="label">Difficulty</Form.Label><br />
                    <input type="text" name="difficulty" value={this.state.difficulty} onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                    Beginner, Moderate, or Advanced.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label className="label">Light</Form.Label><br />
                    <input type="text" name="light" value={this.state.light} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
                <Form.Label className="label">Water</Form.Label><br />
                    <input type="text" name="water" value={this.state.water} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
                <Form.Label className="label">Soil</Form.Label><br />
                    <input type="text" name="soil" value={this.state.soil} onChange={this.handleChange}/>
            </Form.Group>
            
             <input type="submit" value="Add Plant"/>
    
            </Form>
        )
    }
}

export default connect(null, {createPlant})(NewPlantForm)