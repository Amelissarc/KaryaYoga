import React from "react"; 
import { ItemListContainer, NavbarDarkExample, Footer} from '../components' 

export const YogaSet = () => {
    
    return(
        <div>
            <div className="bodyContainer">
                <div className="headerContainer">
                    <NavbarDarkExample />
                </div>
                <div className="mainContainer">
                    <ItemListContainer greeting = "Yoga Set" />
                </div>
                    <Footer />
            </div>
        </div>
    )
}