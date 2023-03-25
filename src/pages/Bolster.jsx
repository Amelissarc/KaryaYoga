import React from "react"; 
import { ItemListContainer, NavbarDarkExample, Footer} from '../components' 

export const Bolster = () => {
    
    return(
        <div>
            <div className="bodyContainer">
                <div className="headerContainer">
                    <NavbarDarkExample />
                </div>
                <div className="mainContainer">
                    <ItemListContainer greeting = "Bolster" />
                </div>
                    <Footer />
            </div>
        </div>
    )
}