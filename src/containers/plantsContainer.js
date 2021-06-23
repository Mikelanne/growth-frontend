import { Component } from "react";
import PlantCard from "../components/PlantCard"
import { connect } from 'react-redux'

class PlantsContainer extends Component {

    componentDidMount(){
        const url = "http://localhost:3001/plants"

        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            const plants = json
            this.props.setPlants(plants)
        })
    }

    makePlantCards(){
        return this.props.plants.map(plant => <PlantCard
            key={plant.id}
            id={plant.id}
            nickname={plant.nickname}
            name={plant.name}
            careLevel={plant.care_level}
            light={plant.light}
            water={plant.water}
            soil={plant.soil}
            toxicToPets={plant.toxic_to_pets}
            />)
    }

    render(){
        return (
            <div>
                Plants Container
                {this.makePlantCards()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        plants: state.plants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlants: (plants) => dispatch({type: "GOT_PLANTS", payload: plants})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer)