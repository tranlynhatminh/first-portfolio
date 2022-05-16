import './Message.css'
import TitleMessage from "./TitleMessage"
import SendMessage from "./SendMessage"

function Message() {
    return (
        <div className="message-area">
            <div className="container">
                <div className="row">
                    <TitleMessage />
                    <SendMessage />
                </div>
            </div>
        </div>
    )
}

export default Message