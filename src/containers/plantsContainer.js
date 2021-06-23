import { Component } from "react";
import PlantCard from "../components/PlantCard"
import { connect } from 'react-redux'

class PlantsContainer extends Component {

    makePlantCards(){
        return this.props.plants.map(plant => <PlantCard
            key={plant.id}
            id={plant.id}
            nickname={plant.attributes.nickname}
            name={plant.attributes.name}
            careLevel={parseInt(plant.attributes.care_level)}
            light={plant.attributes.light}
            water={plant.attributes.water}
            soil={plant.attributes.soil}
            toxicToPets={plant.attributes.toxic_to_pets}
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

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer)