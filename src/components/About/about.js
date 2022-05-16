import "./about.css"
import AboutCaption1 from "./AboutCaption1"
import AboutCaption2 from "./AboutCaption2"
function About() {
    return (
        <div className="about-area">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-5">
                        <AboutCaption1 />
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <AboutCaption2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About