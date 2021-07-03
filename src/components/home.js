import { Jumbotron } from "react-bootstrap"
import { Button } from "react-bootstrap"
import {Link} from 'react-router-dom'


const Home = () => {

    return (
        <Jumbotron>
            <h1>Welcome to Growth</h1>
                <p>
                    Growth is the app for plant owners both advanced and beginner. Growth allows you to keep track of your plants, all the care your plants require, and provide information for plants you may want to purchase in the future. 
                </p>
                <p>
                <Link to="/plants"><Button variant="outline-success">Grow</Button></Link>
                </p>
        </Jumbotron>
    )

}

export default Home
