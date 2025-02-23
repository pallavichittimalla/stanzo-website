import React from "react";
import "./innovation4.css";
import image1 from "../images/image1.svg";
import image2 from "../images/image2.svg";
import image3 from "../images/image3.svg";

export default function Innovation4() {
    return(
        <div className="innovation4-main">
            <div className="innovation4-top">
                <div className="innovation4-heading"><h1 className="h1">Not Sure Which Light to Choose? Experience It First!</h1></div>
                <div className="innovation4-heading-content">Still deciding? Our Virtual Lighting Preview Lets you see how different lights fit your space before buying.</div>
            </div>
            <div className="innovation4-bottom">
                <div className="images">
                <div>
                    <img src={image1} alt="" />
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
                </div>
                <div className="button">
                    <button>Try Virtual Preview</button>
                </div>

            </div>
        </div>
    );
}