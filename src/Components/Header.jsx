import React from "react";
import "./Header.css";
import facebook from "../images/facebookicon.svg";
import instagram from "../images/Instagram.svg";
import arrow from "../images/chevron-down.svg";
import hamburger from "../images/hamburg.svg" ;
import location from "../images/location.svg";
import vector from "../images/Vector.svg";
import Frame from "../images/Frame.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import stanjologo from "../images/stanjologo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="contacts-section">
          <div>
            <img src={location} alt="" />
            Hyderabad, INDIA
          </div>
          <div>
            <img src={vector} alt="" />
            +91 6305858219
          </div>
          <div>
            <img src={Frame} alt="" />
            info@stanjo.in
          </div>
        </div>
        <div className="socialmedia-icons">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <div className="bottom-header">
        <nav>
          
        </nav>
        <div> <img src={stanjologo} alt="" /></div>
        <div>Home|</div>
        <div>About Us | Certifications|</div>
        <div className="products">
          Products={"dropdown"}
          
          <img src={arrow} alt=">" />
        </div>
        <div>LM79 Reports|</div>
        <div>Shop|</div>
        <div>Contact Us|</div>
        <div>
          Calculators|<img src={arrow} alt=">" />
        </div>
        <div className="header-hamburg">
          <img src={hamburger} alt="menu" />
        </div>
      </div>
    </header>
  );
};
export default Header;