import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import LoginWidget from '../LoginWidget/LoginWidget';
import Style from './Header.css'
import NavbarDarkExample from '../NavBar/NavBar'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Header = () => {
    return (
        <div>
            <header>
                <div className="logoHeader">
                    <img src="./img/tipo-blancotrabajo.png" alt="logo" className='logoHeader'/>
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
                <div className="asideHeader">
                    <NavbarDarkExample />
                </div>
            </aside>
        </div>
    )
}

export default Header;
