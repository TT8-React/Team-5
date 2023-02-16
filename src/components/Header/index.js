import React from 'react'
import Avatar from '../Avatar'
import { StyleHeader } from './Style'

const Header = (props) => {
  return (
    <StyleHeader>
        <h2>{props.title}</h2>
        <Avatar/>
    </StyleHeader>
  )
}

export default Header