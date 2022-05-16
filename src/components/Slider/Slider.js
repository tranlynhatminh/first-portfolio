import Slider from "react-slick"
import './Slider.css'

function SliderImg() {
    const sliderUrls = [
        "https://user-images.githubusercontent.com/94737368/168521461-d2aef88b-8d33-42c6-9648-e5344daa8798.png",
        "https://user-images.githubusercontent.com/94737368/168521465-7228d16b-4649-4eb0-882e-cb3c494f3de6.png",
        "https://user-images.githubusercontent.com/94737368/168521467-eb1bb2ba-a07b-46f9-8397-300e901622d3.png",
        "https://user-images.githubusercontent.com/94737368/168521472-a4c05bb4-9170-4019-95e0-665ea7453877.png",
        "https://user-images.githubusercontent.com/94737368/168521467-eb1bb2ba-a07b-46f9-8397-300e901622d3.png",
        "https://user-images.githubusercontent.com/94737368/168521465-7228d16b-4649-4eb0-882e-cb3c494f3de6.png",
    ]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
              }
            },
            {
                breakpoint: 800,
                settings: {
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                }
            },
        ]
    }

    return (
        <div className="slider-area">
            <div className="container">
                <Slider {...settings}>
                    {sliderUrls.map((item, i) => (
                        <div className="slider-image">
                            <img src={item} key={i}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SliderImg