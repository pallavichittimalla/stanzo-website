import React from "react";
import "./innovation5.css";
import image4 from "../images/image4.svg";
import image5 from "../images/image5.svg";
import image6 from "../images/image6.svg";
import image7 from "../images/image7.svg";
import image8 from "../images/image8.svg";
import image9 from "../images/image9.svg";
import image10 from "../images/image10.svg";

export default function Innovation5() {
    return (
        <div className="innovation5-main">
            <div className="innovation5-top">
            <div className="innovation5-heading">Why Choose Stanjo?</div>
            <div className="innovation5-content">Premium Quality. Stunning Performance. Unmatched Value </div>
                <div className="image-top">
                    <div><img src={image4} alt="" /></div>
                    <div><img src={image5} alt="" /></div>
                    <div><img src={image6} alt="" /></div>
                    <div><img src={image7} alt="" /></div>
                </div>
            </div>
            <div className="image-bottom">
                    <div><img src={image8} alt="" /></div>
                    <div><img src={image9} alt="" /></div>
                    <div><img src={image10} alt="" /></div>
            </div>
        </div>
    );
}