import React from "react"
import Slider from "react-slick"
class FeedbackMidle extends React.Component {
    render() {

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        infinite: true,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 699,
                    settings: {
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }

        return (
            <div className="container">
                {/* <button type="button" class="slick-prev">Previous</button> */}
                <Slider {...settings}>
                    <div className="person">
                        <div className="top-info row">
                            <div className="img-person col-lg-3">
                                <img src="./first-portfolio/images/person1.webp"/>
                            </div>
                            <div className="office-person col-lg-8">
                                <h2>Bradley Erickson</h2>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="info-person">
                            <p>Consectetur adipisicing elit, 
                                seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. 
                                Ut imminim restai veniam, quis nostrud.</p>
                        </div>
                    </div>
                    <div className="person">
                        <div  className="top-info row">
                            <div className="img-person col-lg-3">
                                <img src="./first-portfolio/images/person2.webp"/>
                            </div>
                            <div className="office-person col-lg-8">
                                <h2>Bradley Erickson</h2>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="info-person">
                            <p>Consectetur adipisicing elit, 
                                seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. 
                                Ut imminim restai veniam, quis nostrud.</p>
                        </div>
                    </div>
                    <div className="person">
                        <div  className="top-info row">
                            <div className="img-person col-lg-3">
                                <img src="./first-portfolio/images/person3.webp"/>
                            </div>
                            <div className="office-person col-lg-8">
                                <h2>Bradley Erickson</h2>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="info-person">
                            <p>Consectetur adipisicing elit, 
                                seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. 
                                Ut imminim restai veniam, quis nostrud.</p>
                        </div>
                    </div>
                    <div className="person">
                        <div  className="top-info row">
                            <div className="img-person col-lg-3">
                                <img src="./first-portfolio/images/person2.webp"/>
                            </div>
                            <div className="office-person col-lg-8">
                                <h2>Bradley Erickson</h2>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="info-person">
                            <p>Consectetur adipisicing elit, 
                                seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. 
                                Ut imminim restai veniam, quis nostrud.</p>
                        </div>
                    </div>
                    <div className="person">
                        <div  className="top-info row">
                            <div className="img-person col-lg-3">
                                <img src="./first-portfolio/images/person3.webp"/>
                            </div>
                            <div className="office-person col-lg-8">
                                <h2>Bradley Erickson</h2>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="info-person">
                            <p>Consectetur adipisicing elit, 
                                seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. 
                                Ut imminim restai veniam, quis nostrud.</p>
                        </div>
                    </div>
                </Slider>            
                {/* <button type="button" class="slick-next">Next</button> */}
            </div>
        )
    }
}

export default FeedbackMidle