import {
    Badge,
    Container,
    Nav,
    Navbar,
    Dropdown,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa"

const Header = () => {
    return <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
            <Navbar.Brand>
                <a href="/">Puuurfect Pets</a>
            </Navbar.Brand>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                        <span style={{ padding: 10 }}>Cart is empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
};

export default Header;