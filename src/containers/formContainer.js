import { Component } from "react";
import NewPlantForm from '../components/NewPlantForm'
import NavBar from '../components/navBar'

class FormContainer extends Component {

    render(){
        return(
            <div className="form-container">
                <NavBar /> <br />
                <h2>Add a New Plant to Your Family</h2>
                <NewPlantForm />
            </div>
        )
    }


}

export default FormContainer