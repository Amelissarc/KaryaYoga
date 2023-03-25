import React from "react";
import styles from './Footer.css';


export const Footer = () => {
return (
    <React.Fragment>
        <footer className="footer">
        <div className="containerFooter">
            <div className="boxFooter">
                <div className="logoFooter">
                    <img src="./img/logo-webtrabajo.png" alt="logofooter" />
                </div>
                <div className="terms">
                    <p>We sell custom products for all your needs. <br />
                        Packs and bulk products that you will enjoy.</p>
                    <div className="phoneContact">
                        <i className="fa-solid fa-phone"></i>
                        <span>+34 642 49 25 15</span>
                    </div>
                    <div className="redesFooter">
                        <a href="#" aria-label="facebook">
                            <i className="fa-brands fa-facebook"></i>
                        </a>    
                        <a href="#" aria-label="twitter">
                            <i className="fa-brands fa-square-twitter"></i>
                        </a>
                        <a href="#" aria-label="instagram">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="#" aria-label="tiktok">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                        <a href="#" aria-label="youtube">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>  
                </div>
            </div>
            <div className="boxFooter">
                <h4>Our company</h4>
                <a href="#">About us</a>
                <a href="#">FAQ</a>
                <a href="#">Partnerships</a>
                <a href="#">Sustainability</a>
                <a href="#">Blog</a>
            </div>
            <div className="boxFooter">
                <h4>How can we help</h4>
                <a href="#">Place a ticket</a>
                <a href="#">Track your order</a>
                <a href="#">Help center</a>
            </div>
            <div className="boxFooter">
                <h4>Information</h4>
                <a href="#">Contact us</a>
                <a href="#">Live chat</a>
                <a href="#">Privacy</a>
                <a href="#">Terms of use</a>
            </div>
        </div>
        </footer>
    </React.Fragment>
)
}

export default Footer;