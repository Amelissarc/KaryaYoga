import React from "react"; 
import { ItemListContainer, NavbarDarkExample, Footer} from '../components' 

export const YogaBlock = () => {
    
    return(
        <div>
            <div className="bodyContainer">
                <div className="headerContainer">
                    <NavbarDarkExample />
                </div>
                <div className="mainContainer">
                    <ItemListContainer greeting = "YogaBlock" />
                </div>
                    <Footer />
            </div>
        </div>
    )
}