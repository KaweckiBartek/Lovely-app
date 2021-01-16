import React from 'react'
import "./Chats.css"
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


interface IChat {
  name: string,
  message: string,
  timestamp: string,
  profilePic: string,
}

const Chat = ({ name, message, timestamp, profilePic }: IChat) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />

        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>

        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>

  )
}

const Chats = () => {
  return (
    <div className="chats">
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
