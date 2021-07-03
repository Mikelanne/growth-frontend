import Card from 'react-bootstrap/Card'

const PlantCard = (props) => {

        return(
            <Card className="plant-card" border="success" style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Title><i>{props.nickname} the {props.name}</i></Card.Title>
                    <Card.Text>
                        <b>Difficulty:</b> {props.difficulty}<br/>
                        <b>Light:</b> {props.light}<br/>
                        <b>Soil:</b> {props.soil}<br/>
                        <b>Water:</b> {props.water}<br/>
                    </Card.Text>
                </Card.Body>
            </Card>
        )

}

export default PlantCard