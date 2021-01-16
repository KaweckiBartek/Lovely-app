import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import "./ChatScreen.css"

const ChatScreen = () => {
  const [input, setInput] = useState('')
  const [ messages, setMessages ] = useState([ {
    name: "Ellen",
    image: "",
    message: "yoyoyo",
  },
  {
    name: "Ellen",
    image: "",
    message: "yoyoyo",
  },
  {
    message: "Thank's its great"
  }
  ]);

  const handleSend = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setMessages([ ...messages, { message: input } ]);
    setInput('');
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__matched">YOU MATCHED WITCH ELLEN ON 10/01/21</p>
      {messages.map((message, i) => (
        message.name ?
          <div className="chatScreen__message" key={i}>
            <Avatar
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
          :
          <div className="chatScreen__message " key={i}>
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
      ))}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button onClick={handleSend} type="submit" className="chatScreen__send">SEND</button>
      </form>
    </div>
  )
}

export default ChatScreen
