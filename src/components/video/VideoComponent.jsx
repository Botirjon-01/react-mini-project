import React, {useState} from 'react'
import ReactPlayer from 'react-player'


import "./Videocom.css"

const VideoComponent = () => {
  
  const [yotubevideo, setyotubevideo] = useState("")




  return (
    <div className='wrapper'>VideoComponent
    <form action="">
        <input type="text"  placeholder='yideo id' required/>
        <button type='submit'>video ko'rish</button>
    </form>
    <div className="youtube-box">

      
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls />
   
   
    </div>
    
    
    </div>
  )
}

export default VideoComponent