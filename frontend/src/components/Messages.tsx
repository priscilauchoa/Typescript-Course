import React from 'react';

interface IMessage {
    subject: string,
    message: string
}


const Message = ({message}) => {
    return(
        <div>
            <strong>
                Subject: 
            </strong>
                {message.subject} <br></br>
            <strong>
                Message:
            </strong>
                {message.message}
                <br></br>
            
        </div>

    )
}

export default Message;