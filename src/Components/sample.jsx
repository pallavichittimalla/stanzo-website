import React from "react";
import "./sample.css";
import image from "../images/image.png";

export default function Sample(){
    return(
        <div className="sample-main">
            <div className="sample-content">
                <div className="sample-heading">Resume Builder: Craft Your career path</div>
                <div className="sample-discription">Standing out in today's competitive job market starts with a stellar resume. Our intuitive resume builder takes the stress out of creating professional, ATS-friendly resumes. Choose from expertly designed templates, customize your content, and let our guided approach ensure your skills and experience shine. Whether you're starting your career or looking to advance, our tool helps you present your best self to prospective employers.</div>
                <div className="image"><img src={image} alt="image" /> </div>

            </div>
        </div>
    )

}