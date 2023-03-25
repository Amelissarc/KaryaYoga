import React from "react"; 
import { ItemListContainer, NavbarDarkExample, Footer} from '../components' 

export const Books = () => {
    
    return(
        <div>
            <div className="bodyContainer">
                <div className="headerContainer">
                    <NavbarDarkExample />
                </div>
                <div className="mainContainer">
                    <ItemListContainer greeting = "Books" />
                </div>
                    <Footer />
            </div>
        </div>
    )
}