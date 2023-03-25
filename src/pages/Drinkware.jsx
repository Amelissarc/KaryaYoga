import React from "react"; 
import { ItemListContainer, NavbarDarkExample, Footer} from '../components' 

export const Drinkware = () => {
    
    return(
        <div>
            <div className="bodyContainer">
                <div className="headerContainer">
                    <NavbarDarkExample />
                </div>
                <div className="mainContainer">
                    <ItemListContainer greeting = "Drinkware" />
                </div>
                    <Footer />
            </div>
        </div>
    )
}