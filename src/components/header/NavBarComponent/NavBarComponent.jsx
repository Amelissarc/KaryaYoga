import React from 'react';
import CartWidget from '../CartWidgetComponent/CartWidgetComponent';
import LoginWidget from '../LoginWidgetComponent/LoginWidgetComponent';
import FolderList from '../HandleListItem/HandleListItem';
import stylesNavBar from './NavBar.css';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const NavBarComponent = () => {
    return (
        <div>
            <header>
                <div className="logoHeader">
                    <img src="./img/tipo-blancotrabajo.png" alt="logo"/>
                </div>
                <div className='formSearch'>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search Products"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Button>
                </Form>
                </div>
                <div className='accountAndCartHeader'>
                    <a href="#">
                        <LoginWidget />
                    </a>
                    <a href="#">
                        <CartWidget />
                    </a>
                </div>
            </header>
            <aside>
                <div className="asideHeader"></div>
            </aside>
        </div>
    )
}


export function NavbarDarkExample() {
    return (
        <Navbar bg="#E5BCD9" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/">All products</Navbar.Brand>
            <Navbar.Brand href="/YogaSet">Yoga Set</Navbar.Brand>
            <Navbar.Brand href="/Drinkware">Drinkware</Navbar.Brand>
            <Navbar.Brand href="/Bolster">Bolster</Navbar.Brand>
            <Navbar.Brand href="/YogaBlock">Yoga Block</Navbar.Brand>
            <Navbar.Brand href="/Shirts">Shirts</Navbar.Brand>
            <Navbar.Brand href="/Books">Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
            <Nav>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Favorites"
                >
                    <FolderList />
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action/3.4">Go to Home</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    ); 
}