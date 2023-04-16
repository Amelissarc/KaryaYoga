import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import LoginWidget from '../LoginWidget/LoginWidget';
import Style from './Header.css'
import NavbarDarkExample from '../NavBar/NavBar'
import SearchProducts from '../../../context/SearchProducts';

export const Header = () => {
    return (
        <div>
            <header>
                <div className="logoHeader">
                    <img src="./img/tipo-blancotrabajo.png" alt="logo" className='logoHeader'/>
                </div>
                <div className='formSearch'>
                    <SearchProducts />
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

