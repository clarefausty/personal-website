import React from 'react'
import "./Progress.css"

function Progress() {
  return (
    <div className='container'>
        <div className='progress-label'>HTML</div>
        <div className='progress-bar'>
            <div className='progress-bar-fill fill-html'></div>
        </div>
        
        <div className='progress-label'>CSS</div>
        <div className='progress-bar'>
            <div className='progress-bar-fill fill-css'></div>
        </div>
        
        <div className='progress-label'>JavaScript</div>
        <div className='progress-bar'>
            <div className='progress-bar-fill fill-js'></div>
        </div>
        
        <div className='progress-label'>React</div>
        <div className='progress-bar'>
            <div className='progress-bar-fill fill-react'></div>
        </div>
    </div>
  )
}

export default Progress