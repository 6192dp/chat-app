import React, { useState } from "react"

const ChatBody = () => {
    const [messageArray] = useState(["hi"])
    if (messageArray?.length) {
        return (
            <div className="bg-gray">
                {messageArray.map((item, index) => (
                    <>
                        <div>{item}</div>
                        <div>{index}</div>
                    </>
                ))}
            </div>
        )
    }
    return (
        <div className="bg-gray">
            This is the beginning of your conversation!
        </div>
    )
}

export default ChatBody
