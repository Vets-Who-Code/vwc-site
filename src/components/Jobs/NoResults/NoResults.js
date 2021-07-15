import PropTypes from 'prop-types'

function NoResults({ isSubmitted, jobData }) {
  return (
    <div>
      <p
        className={`text-center no-results ${
          isSubmitted && jobData && jobData.results.length === 0 ? '' : 'hidden'
        }`}
      >
        Sorry there were no results. Try again.
      </p>
    </div>
  )
}

export default NoResults

NoResults.propTypes = {
  isSubmitted: PropTypes.string,
  jobData: PropTypes.string,
}
