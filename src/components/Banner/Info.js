import React from 'react';

function Info (props) {
    return (
            <div className='content'>
                <span id='Get'>GET EVERY SINGLE SOLUTIONS</span>
                <div className='section-animate'>
                    <div className='section-caption'>

                        <div id="banner-title" className={props.infoAnimation === true ? 'fadeInUp' : ''}>
                            <h1 id="head-captions">I’m Designer Haris F. Watson</h1>
                        </div>

                        <div id='banner-description' className={props.infoAnimation === true ? 'fadeInUp1' : ''}>
                            <p id='content-captions'>jhorem rfpsum golor sidt amet, consectetur adipiscing elit, eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua. 
                                Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Info