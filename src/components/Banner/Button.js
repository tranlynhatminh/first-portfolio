import React from "react"

function Button (props) {
    return (
        <div className="btn-captions">
            <a href="#" id="learnMore" className={props.buttonAnimation === true ? "fadeInRight btn hero-btn" : 'btn hero-btn'}>
                Learn More
            </a>
            <a href="#" id="hireMe" className={props.buttonAnimation === true ? "fadeInLeft btn border-btn" : 'btn border-btn'}>
                <b>Hire Me</b>
            </a>
        </div>
    )
}
export default Button