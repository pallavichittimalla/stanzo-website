import React from "react";
import facebook from "../images/facebookicon.svg";

import instagram from "../images/Instagram.svg";
import location from "../images/location.svg";
import vector from "../images/Vector.svg";
import Frame from "../images/Frame.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
export default function Footer() {
  return (
    <div className="footer-head">
      <div className="footer-left">
        <h4>Lighting Your World with Innovation and Efficiency</h4>
        <div>
          <div className="footer-contact-details">
            <img src={location} alt="" />
            Hyderabad, India
          </div>
          <div className="footer-contact-details">
            <img src={vector} alt="" />
            +91 6305858219
          </div>
          <div className="footer-contact-details">
            <img src={Frame} alt="fb" />
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
      <div className="footer-right">
        <div className="footer-products">
            <h5>PRODUCTS</h5>
            <div>Panel Lights</div>
            <div>Flood Lights</div>
            <div>Street Lights</div>
            <div>Down Lights</div>
            <div>LED Indoor Lights</div>
            <div>LED Outdoor Lights</div>
            <div>Tubelights&Bulbs</div>
        </div>
        <div className="footer-others">
        <h5>OTHERS</h5>
            <div>About</div>
            <div>Products Gallery</div>
            <div>Calculators</div>
            <div>Contact Us</div>
            <div>Privacy Policy</div>
            <div>Terms & conditions</div>
        </div>
      </div>
    </div>
  );
}