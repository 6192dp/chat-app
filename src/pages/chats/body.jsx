import React, { useState } from 'react';

export const ChatBody = () => {
    const [messageArray, updateMessageArray] = useState([]);
    if (messageArray?.length){
        return(<div class="bg-gray">
        Hello
            </div>)
    } 
    return(<div class="bg-gray">
    This is the beginning of your conversation!
        </div>)
}