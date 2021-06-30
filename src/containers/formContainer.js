import { Component } from "react";
import NewPlantForm from '../components/NewPlantForm'
import NavBar from '../components/navBar'

class FormContainer extends Component {

    render(){
        return(
            <div className="form-container">
                <NavBar />
                < NewPlantForm />
            </div>
        )
    }


}

export default FormContainer