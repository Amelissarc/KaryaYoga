import React from 'react';
import {NavbarDarkExample, ItemListContainer, Footer} from '../components'

export const Home = () => {
    return (
        <div>
            <div className="bodyContainer">
                <div className="headerContainer">
                    <NavbarDarkExample />
                </div>
                <div className="mainContainer">
                    <ItemListContainer greeting = "All products" />
                </div>
                    <Footer />
            </div>
        </div>
    )
}