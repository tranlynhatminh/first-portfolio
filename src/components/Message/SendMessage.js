function SendMessage() {
    return (
        <div className="col-xl-5 col-lg-5 send-message">
            <form>
                <input type={"text"} placeholder={"Full Name"}></input>
                <input type={"email"} placeholder={"Email Adress"}></input>
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default SendMessage