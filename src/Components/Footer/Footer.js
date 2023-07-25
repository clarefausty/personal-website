import React from 'react'
import "./Footer.css"

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
      <p>FaustyCodes @ {year}</p>
    </div>
    </React.Fragment>
    
  )
}

export default Footer