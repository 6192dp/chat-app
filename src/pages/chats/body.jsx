/* eslint-disable react/prop-types */
import React from "react"

const ChatBody = ({ messageArray, chatRef }) => {
    if (messageArray?.length) {
        return (
            <>
                <div
                    className="bg-gray overflow-y-auto flex-grow"
                    ref={chatRef}
                >
                    {messageArray.map((item) => (
                        <div className="flex m-2">
                            <div className="bg-blue-500 max-w-prose ml-auto p-1 text-white">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className="bg-gray text-center flex justify-center items-center flex-grow">
            This is the beginning of your conversation!
        </div>
    )
}

export default ChatBody
