import { Jumbotron } from "react-bootstrap"
import { Button } from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'


const Home = () => {

    return (
        <Jumbotron>
            <h1>Welcome to Growth</h1>
                <p>
                    Growth is the app for plant owners both advanced and beginner. Growth allows users to keep track of their plants, all the care their plants require, and help you remember the last time you watered them. Growth is here to help you keep plants alive for once.
                </p>
                <p>
                {/* <LinkContainer to="/plants">
                    <Button variant="outline-success">Grow</Button>
                </LinkContainer> */}
                <Link to="/plants"><Button variant="outline-success">Grow</Button></Link>
                </p>
        </Jumbotron>
    )

}

export default Home
