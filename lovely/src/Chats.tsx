import React from 'react'
import "./Chats.css"
import Avatar from '@material-ui/core/Avatar';


interface IChat {
  name: string,
  message: string,
  timestamp: string,
  profilePic: string,
}

const Chat = ({ name, message, timestamp, profilePic }: IChat) => {
  return (
    <div className="chat">
      <Avatar className="chat__image" alt={name} src={profilePic} />
        
      <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
      </div>
      
      <p className="chat__timestamp">{timestamp}</p>
    </div>

  )
}

const Chats = () => {
  return (
    <div className="chats__wrapper">
      <Chat
        name="Mark Zuckerberg"
        message="Yo what's up!"
        timestamp="40 second ago"
        profilePic="url"

      />
    </div>
  )
}

export default Chats
