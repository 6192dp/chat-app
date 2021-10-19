/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"

const MessageInput = ({ messageArray, updateMessageArray, chatRef }) => {
    const [text, updateText] = useState("")

    useEffect(() => {
        const scrollToBottom = () => {
            if (chatRef?.current)
                chatRef.current.scrollTo(0, chatRef.current.scrollHeight)
        }
        scrollToBottom()
    }, [messageArray])

    const handleInputChange = (e) => {
        updateText(e.target.value)
    }

    const handleMessageSend = () => {
        const currentMessageUtil = new Array(text)
        const messageArrayUtil = [...messageArray]
        updateMessageArray([...messageArrayUtil, currentMessageUtil])
        updateText("")
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && text.length) handleMessageSend()
    }

    return (
        <div className="border-t-2 flex justify-between w-full">
            <input
                className="px-2 py-4"
                type="text"
                placeholder="Type a message"
                value={text}
                onChange={handleInputChange}
                onKeyPress={handleKeyDown}
            />
            <button
                type="button"
                className="px-4 text-red-500 font-bold"
                onClick={handleMessageSend}
            >
                SEND
            </button>
        </div>
    )
}

export default MessageInput
