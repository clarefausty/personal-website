import React from 'react'
import "./Content.css"
import {AiFillTwitterCircle} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"

function Content() {
  return (
    <div className='content-page'>
      <div className='photo-section'>
      <img className='sidebar rounded grid-item' src='/Asset/chinwe.PNG' alt='Pretty Lady'/>
      <div className='social-handle'>
      <span className='footer grid-item handle'><AiFillTwitterCircle className='handle-icon' /></span>
      <span className='footer grid-item handle'><FaLinkedin className='handle-icon'/></span>
      <span className='footer grid-item handle'><AiFillGithub className='handle-icon'/></span>
      </div>
      </div>
      <div className='career-section'>

      
      <h1 className='header grid-item'>Achilonu <span className='name'>Chinwendu Faustina</span></h1>
      <h5 className='title grid-item'>Frontend Developer</h5>
      <p className='content grid-item'>I am a Frontend Developer with a solid foundation in HTML, CSS, JavaScript, and React. I consistently deliver responsive and engaging websites or web applications.</p>
      <button className='footer grid-item cv-btn'>Download CV</button>
      </div>
    </div>
  )
}

export default Content