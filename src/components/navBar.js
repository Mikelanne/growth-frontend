import Nav from "react-bootstrap/nav"
import {Link} from 'react-router-dom'
import Button from "react-bootstrap/button"

const NavBar = () => {

    return (
    <Nav variant="tabs" defaultActiveKey="/plants">
        <Nav.Item>
            <Nav.Link>
                <Link to="/plants" >
                    <Button variant="outline-success">Plants</Button>
                </Link>
            </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Maintainence
            </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
            <Nav.Link>
                <Link to="/plants/new">
                    <Button variant="outline-success">Add a New Plant</Button>
                </Link>
            </Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default NavBar