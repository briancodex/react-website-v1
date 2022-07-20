import React from 'react'
import ReactPlayer from 'react-player'
import './Video.css'

function Video() {
  return (
    <div className='video'>
        <div className="container">
            <h2 className='pt-5'>Video Profil</h2>
            <div className='player-wrapper '>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              width='100%'
              height='100%'
            />
            </div> 
        </div>  
    </div>
  )
}

export default Video