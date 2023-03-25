import React from 'react';
import FolderList from '../HandleListItem/HandleListItem';
import { NavLink } from 'react-router-dom';
import Style from './NavBar.css'

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavbarDarkExample = () =>{
    return (
        <Navbar bg="#E5BCD9" expand="lg">
        <Container fluid>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                All Products
              </NavLink>
            </li>
            <li className="nav-item">
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category/YogaSet"
              >
                Yoga Set
              </NavLink>
            </li>
            <li className="nav-item">
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category/Drinkware"
              >
                Drinkware
              </NavLink>
            </li>
            <li className="nav-item">
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category/Bolster"
              >
                Bolster
              </NavLink>
            </li>
            <li className="nav-item">
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category/YogaBlock"
              >
                Yoga Block
              </NavLink>
            </li>
            <li className="nav-item">
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category/Shirts"
              >
                Shirts
              </NavLink>
            </li>
            <li className="nav-item">
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category/Books"
              >
                Books
              </NavLink>
            </li>
          </ul>
            
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

export default NavbarDarkExample;