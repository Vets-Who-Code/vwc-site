import PropTypes from 'prop-types'

function Video({ isSubmitted }) {
  return (
    <video className={`veteran-video ${isSubmitted ? 'hidden' : ''}`} autoPlay loop muted>
      <source src="videos/veteran-on-computer.mp4" type="video/mp4"></source>
    </video>
  )
}

export default Video

Video.propTypes = {
  isSubmitted: PropTypes.bool,
}
