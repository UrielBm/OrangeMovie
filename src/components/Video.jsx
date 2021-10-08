import React from "react"
import ReactPlayer from "react-player/lazy"
const Video = ({ data, loading, error }) => (
  <ReactPlayer
    className="video"
    url={data}
    controls
    playbackRate
    onReady={() => loading()}
    onError={() => error()}
  />
)

export default Video
