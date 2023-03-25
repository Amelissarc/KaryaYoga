import React from "react";
import { ItemListContainer, NavbarDarkExample, Footer} from '../components' 

export const Shirts = () => {
    
    return(
        <div>
            <div className="bodyContainer">
                <div className="headerContainer">
                    <NavbarDarkExample />
                </div>
                <div className="mainContainer">
                    <ItemListContainer greeting = "Shirts" />
                </div>
                    <Footer />
            </div>
        </div>
    )
}