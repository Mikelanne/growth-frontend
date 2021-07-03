import { Component } from "react";
import EasyPlants from "../components/EasyPlants";
import NavBar from '../components/navBar'
import SleepyPlants from "../components/SleepyPlants";
import HardPlants from "../components/HardPlants";

class PlantCategoryContainer extends Component {

    render(){
        return(
            <div className="category-container">
                <NavBar /> <br />
                <h2>Thinking of adding a new plant? Take a look at these helpful categories.</h2><br />
                <SleepyPlants /><br />
                <EasyPlants /><br />
                <HardPlants />
            </div>
        )
    }
}

export default PlantCategoryContainer