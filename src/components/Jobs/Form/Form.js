import SearchButton from './SearchButton/SearchButton'
import Remote from './Remote/Remote'
import ZipCode from './ZipCode/ZipCode'
import Distance from './Distance/Distance'
import PropTypes from 'prop-types'

function Form({ data }) {
  return (
    <form onSubmit={event => data(event)} className="form-inline text-center job-grabber">
      <ZipCode />
      <Remote />
      <Distance />
      <SearchButton />
    </form>
  )
}

export default Form

Form.propTypes = {
  data: PropTypes.object,
}
