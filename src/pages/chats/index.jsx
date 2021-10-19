import React, { useRef, useState } from "react"
import ChatBody from "./body"
import ChatHeader from "./header"
import MessageInput from "./messageinput"

const ChatMain = () => {
    const [messageArray, updateMessageArray] = useState([])
    const chatRef = useRef(null)
    return (
        <div className="flex flex-col h-screen">
            <ChatHeader />
            <ChatBody messageArray={messageArray} chatRef={chatRef} />
            <MessageInput
                messageArray={messageArray}
                updateMessageArray={updateMessageArray}
                chatRef={chatRef}
            />
        </div>
    )
}

export default ChatMain
