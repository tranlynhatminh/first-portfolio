import './Footer.css';
import FooterCap from './FooterCap';
import FooterCoppyRight from './footer-coppyright';
import Social from './Social';

function Footer() {
    return (
        <footer>
            <div className="footer-area">
                <div className="container-footer">
                    <div className="row">
                        <FooterCap />
                    </div>
                    <div className="footer-bottom-area">
                        <div className="footer-bottom">
                            <div className='row'>
                                <FooterCoppyRight />
                                <Social />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer