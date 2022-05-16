import React, { useEffect, useState } from 'react';
import './Banner.css';
import Info from './Info';
import Button from './Button';


function Banner() {

    const [infoAnimation, setInfoAnimation] = useState(false);
    const [buttonAnimation, setButtonAnimation] = useState(false);

    useEffect(() => {
        setTimeout(() =>{
            setInfoAnimation(true);
        }, 100);   
        
        setTimeout(() => {
            setButtonAnimation(true)
        },200)
    }, []);

    return (
        <div className="banner-area">
            <div className='banner'>
                <div className='banner-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-8 '>
                                <Info infoAnimation={infoAnimation} />
                                <Button buttonAnimation={buttonAnimation}/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Banner