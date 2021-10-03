import React from "react"
import ReactPlayer from "react-player/lazy"
const Video = ({ data, loading }) => (
  <ReactPlayer
    className="video"
    url={data}
    controls
    playbackRate
    onReady={() => loading()}
    onError={() => {
      console.log("hubo un error")
    }}
  />
)

export default Video
