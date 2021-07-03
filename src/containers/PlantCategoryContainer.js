import { Component } from "react";
import EasyPlants from "../components/EasyPlants";
import NavBar from '../components/navBar'
import SleepyPlants from "../components/SleepyPlants";

class PlantCategoryContainer extends Component {

    render(){
        return(
            <div className="category-container">
                <NavBar /> <br />
                <h2>Thinking of adding a new plant? Take a look at these helpful categories.</h2><br />
                <SleepyPlants /><br />
                <EasyPlants />
            </div>
        )
    }
}

export default PlantCategoryContainer