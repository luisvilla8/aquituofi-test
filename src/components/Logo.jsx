import React from 'react'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
  return (
    <NavLink to="/">
      <img 
        src="https://firebasestorage.googleapis.com/v0/b/irent-340014.appspot.com/o/logo_simple.png?alt=media&token=4897894f-c671-43a8-9975-fb736dcb12f7" alt="oficina" 
        width="40px"
        height="30px"
      />
    </NavLink>
  )
}