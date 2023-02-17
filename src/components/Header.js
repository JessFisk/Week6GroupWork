import {
    Badge,
    Container,
    Nav,
    Navbar,
    Dropdown,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom";

const Header = (props) => {
    return <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
            <Navbar.Brand>
                <img className="logo" src=".\images\catlogo.png" alt="logo"/>
                <a className="name" href="/">Puuurfect Pets</a>
            </Navbar.Brand>
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge bg="none">{props.basket.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                    {props.basket.map((cat, index)=>{
                        return(
                            // <Dropdown.Item >{cat.name} - {cat.price}</Dropdown.Item>)})}
                            <Dropdown.Item>
                            <div key={index} className="checkoutCatBoxes">

                            <div className="basketItemNames">
                            <p>{cat.name}</p>
                            </div>
              
                            <div className="basketItemPrice">
                            <p>{cat.price}</p>
                            </div>
              
                            <button className="basketRemoveButton">
                            &times;
                            </button>
              
                            </div>
                            </Dropdown.Item>)})}
                            <Link to={"/Checkout"}>Go to check out</Link>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
        
    </Navbar>
};

export default Header;
