import React from 'react'
import "./Footer.css"
import { Marquee } from 'dynamic-marquee-react'

function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear())
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      setYear(new Date().getFullYear())
    }, 1000)
    return() => clearInterval(interval)
  }, [])
  return (
    <React.Fragment>
    <div className='foot-end'>
      <Marquee rate={-100}>
      <div>FaustyCodes @ {year}</div>
      <div>&nbsp;&bull;&nbsp;</div>
      </Marquee>
      
    </div>
    </React.Fragment>
    
  )
}

export default Footer