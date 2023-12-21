import React, { useContext } from "react";
import Messages from "./Messages.jsx"
import Input from "./Input.jsx"
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
    const { data } = useContext(ChatContext);
    return (
        <div className='Chat'>
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
            </div>
            <div className="messages"><Messages /></div>
            <div className="input"><Input /></div>
        </div>
    )
}

export default Chat
