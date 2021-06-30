import Nav from "react-bootstrap/nav"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const NavBar = () => {

    return (
    <Nav variant="tabs" defaultActiveKey="/plants">
        <Nav.Item>
            <Nav.Link>
                <Link class="text-success" to="/plants">Plants</Link>
            </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Maintainence
            </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
            <Nav.Link>
                <Link class="text-success" to="/plants/new">Add a New Plant</Link>
            </Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default NavBar