import './Contact.css'
import ContactTitle from './ContactTitle'
import ContactButton from './ContactButton'
function Contact() {
    return (
        <div className="contact-area">
            <div className="container">
                <div className="row contact-section">
                    <div className="col-xl-6 col-lg-8">
                        <ContactTitle />
                    </div>
                    <div className="col-xl-2 col-lg-2">
                        <ContactButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact