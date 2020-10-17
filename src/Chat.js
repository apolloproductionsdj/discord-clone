import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>
            <div className="chatHeader__right">

            </div>
        </div >
    )
}

export default Chat;
