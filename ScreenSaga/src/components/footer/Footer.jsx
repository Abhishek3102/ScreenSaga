import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    This is a web app which provides details about shows and movies.
                </div>
                <div className="socialIcons">
                    {/* Add your social media profile links in the href */}
                    <a href="https://www.facebook.com/abhipz163" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/abhishekpandey7344" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://x.com/ankushpan694" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/abhishek-pandey-05191a300" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
