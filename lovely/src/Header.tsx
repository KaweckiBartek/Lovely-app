import React from 'react'
import { Link, useHistory } from "react-router-dom"
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton'

interface IHeader {
  backButton: boolean,
  path: string;
}

const Header = ({ backButton, path }: IHeader) => {
  const history = useHistory()

  return (
    <div className="header">
      {backButton ? (
        
          <IconButton onClick={()=>history.push(path)}>
            <ArrowBackIosIcon className="header__icon" fontSize="large" />
          </IconButton>
        

      ) : (
          <Link to="/personal">
            <IconButton>
              <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
          </Link>)}


      <h1>Logo</h1>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
