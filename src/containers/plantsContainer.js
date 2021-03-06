import { Component } from "react";
import PlantCard from "../components/PlantCard"
import { connect } from 'react-redux'
import {fetchPlants} from '../actions/plantActions'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import NavBar from '../components/navBar'

class PlantsContainer extends Component {

    componentDidMount(){
        this.props.fetchPlants()
    }

    makePlantCards(){
        return this.props.plants.map(plant => <PlantCard
            key={plant.id}
            id={plant.id}
            nickname={plant.nickname}
            name={plant.name}
            difficulty={plant.difficulty}
            light={plant.light}
            water={plant.water}
            soil={plant.soil}
            toxicToPets={plant.toxic_to_pets}
            />)
    }

    render(){
        return (
            <div>
            <NavBar /><br />
            <h2>Your Plant Family</h2>
            <Container fluid="md">
                <Row>
                    {this.makePlantCards()}
                </Row>
            </Container>
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
        fetchPlants: () => dispatch(fetchPlants())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer)