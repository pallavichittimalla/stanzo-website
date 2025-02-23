import React from "react";
import group from "../images/group.svg";
import "./innovation3.css";

export default function Innovation3() {
    return(
        <div className="innovation3-main">
            <div className="innovation3-top">
                <div className="innovation3-heading">choose the perfect light for your space</div>
                <div className="innovation3-heading-content">Explore our best selling LED lights</div>
            </div>
            <div className="innovation3-bottom">
                <div className="innovation3-bottom-right">
                    <img src={group} alt=""/>
                </div>
                <div className="innovation3-bottom-left">
                <div className="innovation3-bottom">LED Panel Lights</div>
                <div className="innovation3-bottom-content">Sleek,stylish,and perfect for modern interiors</div>
                </div>

            </div>
        </div>
        

    );
}