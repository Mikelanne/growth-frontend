import Nav from "react-bootstrap/nav"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const NavBar = () => {

    return (
    <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link>
                <Link to="/plants">Plants</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>
                <Link to="/">Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            Add a New Plant
            </Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default NavBar