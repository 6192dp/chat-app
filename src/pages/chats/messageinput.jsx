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
        <div className="border-t-2 border-gray-400 flex justify-between w-full mb-1 ml-0.5">
            <input
                className="px-2 py-4 flex-grow outline-none"
                type="text"
                placeholder="Type a message"
                value={text}
                onChange={handleInputChange}
                onKeyPress={handleKeyDown}
            />
            <button
                type="button"
                className={`px-8 text-white font-bold rounded-2xl mt-1 mx-2 ${
                    text.length ? "bg-red-500" : "bg-gray-300"
                }`}
                onClick={handleMessageSend}
            >
                SEND
            </button>
        </div>
    )
}

export default MessageInput
