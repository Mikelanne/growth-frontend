import { Component } from "react";
import Form from "react-bootstrap/form"
import Button from "react-bootstrap/button"

class NewPlantForm extends Component {
    render(){
        return (
            <div>
            <Form className="plant-form">
            <Form.Group>
                <Form.Label>Nickname</Form.Label>
                <Form.Control placeholder="Nickname"/>
                <Form.Text className="text-muted">
                You can name your plant whatever you want!
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Name" />
                <Form.Text className="text-muted">
                This is the space for the plant's actual name.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Care Level</Form.Label>
                <Form.Control placeholder="Beginner, Moderate, or Advanced" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Light</Form.Label>
                <Form.Control placeholder="Light" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Soil</Form.Label>
                <Form.Control placeholder="Soil" />
            </Form.Group>

            <Form.Group>
                <Form.Check type="checkbox" label="Check if this plant is poisonous to pets." />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
             </Button>

            </Form>
            </div>
        )
    }
}

export default NewPlantForm