import React from 'react'
import Tickers from 'react-ticker'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import channel from '@mui/icons-material/MusicNote';
import song from '@mui/icons-material/MusicNote';
import description from '@mui/icons-material/MusicNote';

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
            <MusicNoteIcon className="videoFooter-icon"/>
            <Tickers mode="smooth">
                {({ index }) => (
                    <>
                        <p>{song}</p>
                    </>
                )}
            </Tickers>
        </div>
      </div>
      <img className="videoFooter_record" src="https://www.youtube.com/watch?v=Rhb1wXGyHso" alt="video footer"/>
    </div>
  )
}

export default VideoFooter