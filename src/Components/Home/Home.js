import React from 'react'
import "./Home.css"
import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import Progress from '../ProgressBar/Progress'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
        <NavBar/>
        <Content/>
        <Progress/>
        <Footer/>
        </div>
  )
}

export default Home