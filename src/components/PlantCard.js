import Card from 'react-bootstrap/Card'

const PlantCard = (props) => {

        return(
            <Card  border="success" style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Title>{props.nickname} the {props.name}</Card.Title>
                    <Card.Text>
                    <b>Care level:</b> {props.careLevel}<br/>
                    <b>Light:</b> {props.light}<br/>
                    <b>Soil:</b> {props.soil}<br/>
                    <b>Water:</b> {props.water}<br/>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        )

}

export default PlantCard