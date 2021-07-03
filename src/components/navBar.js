import Nav from "react-bootstrap/nav"
import {Link} from 'react-router-dom'
import Button from "react-bootstrap/button"

const NavBar = () => {

    return (
    <Nav variant="tabs" defaultActiveKey="/plants">
        <Nav.Item>
            <Nav.Link as={Link} to="/">
                <Button variant="outline-success">Home</Button>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/plants">
                <Button variant="outline-success">Your Plants</Button>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/plants/new">
                <Button variant="outline-success">Add a New Plant</Button>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/plants/categories">
                <Button variant="outline-success">Other Plant Information</Button>
            </Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default NavBar