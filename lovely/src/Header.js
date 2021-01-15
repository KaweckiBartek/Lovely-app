import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'


const Header = () => {
  return (
    <div className="header__wrapper">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <h1>Logo</h1>
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Header
