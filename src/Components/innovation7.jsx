import React from "react";
import "./innovation7.css";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";
import icon5 from "../images/icon5.svg";
import icon6 from "../images/icon6.svg";
import icon7 from "../images/icon7.svg";
import icon8 from "../images/icon8.svg";
import icon9 from "../images/icon9.svg";
import icon10 from "../images/icon10.svg";
import icon11 from "../images/icon11.svg";

export default function Innovation7() {
    return (
        <div className="innovation7-main">
            <div className="innovation7-top">
            <div className="innovation7-heading"><h2 className="h2">OUR CLIENTS</h2></div>
            <div className="innovation7-heading1">Trusted by Leading Business and Industries!!</div>
            <div className="innovation7-content">Partnering with top brands to deliver reliable, energy-efficient lighting solutions for every space</div>
                <div className="image-top">
                    <div><img src={icon1} alt="" /></div>
                    <div><img src={icon2} alt="" /></div>
                    <div><img src={icon3} alt="" /></div>
                    <div><img src={icon4} alt="" /></div>
                    <div><img src={icon5} alt="" /></div>
                    <div><img src={icon6} alt="" /></div>

                </div>
            </div>
            <div className="image-bottom">
                    <div><img src={icon7} alt="" /></div>
                    <div><img src={icon8} alt="" /></div>
                    <div><img src={icon9} alt="" /></div>
                    <div><img src={icon10} alt="" /></div>
                    <div><img src={icon11} alt="" /></div>
            </div>
        </div>
    );
}