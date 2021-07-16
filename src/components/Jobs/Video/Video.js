import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import veteranVideo from '../../../video/veteran-on-computer.mp4'

function Video({ isSubmitted }) {
  const videoRef = useRef()

  function play() {
    videoRef.current.play()
  }

  useEffect(() => {
    let current = true

    if (current) {
      play()
    }

    return () => (current = false)
  })

  return (
    <video
      className={`veteran-video img-responsive ${isSubmitted ? 'hidden' : ''}`}
      loop
      muted
      onPlay={play}
      ref={videoRef}
      type="video/mp4"
    >
      <source src={veteranVideo} />
    </video>
  )
}

export default Video

Video.propTypes = {
  isSubmitted: PropTypes.bool,
}
