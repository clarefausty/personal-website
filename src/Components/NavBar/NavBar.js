import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav'>
        <img className='logo' src='/Asset/logo.PNG' alt='logo'/>
      <div className='header-icons'>
        <ul>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar