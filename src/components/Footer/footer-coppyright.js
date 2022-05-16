function FooterCoppyRight() {
    const year = new Date().getFullYear();

    return (
        <div className="footer-info-left col-xl-9 col-lg-8">
            <p>Copyright ©{year} All rights reserved | This template is made with <i className="fas fa-heart"></i> by 
                <a id='changeColor' href='#'> Colorlib</a>
            </p>
        </div>
    )
}

export default FooterCoppyRight