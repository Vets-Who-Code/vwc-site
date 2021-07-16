import PropTypes from 'prop-types'

function Form({ data }) {
  return (
    <form onSubmit={event => data(event)} className="form-inline text-center job-grabber">
      
      <label className="sr-only" htmlFor="zipCode">
        Zip Code
      </label>
      <input
        type="string"
        pattern="[0-9]{5}"
        className="form-control input-lg zip"
        id="zipCode"
        placeholder="Zip Code"
        required
      />

      <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
      <label className="form-check-label" htmlFor="inlineFormCheck">
        Remote?
      </label>

      <div className="form-group" id="sel1">
      <label htmlFor="sel1"></label>
      <select className="form-control input-lg miles" id="sel1" name="sellist1" defaultValue="40">
        {/* <!-- value is set in km --> */}
        <option value="1">Only in</option>
        <option value="8">5 mi.</option>
        <option value="16">10 mi.</option>
        <option value="24">15 mi.</option>
        <option value="40">25 mi.</option>
        <option value="80">50 mi.</option>
        <option value="161">100 mi.</option>
        <option value="322">200 mi.</option>
        <option value="5000">CONUS</option>
      </select>
    </div>

      <button type="submit" className="btn btn-primary mb-2 submit-button search">
      <i className="glyphicon glyphicon-search">&nbsp;Search</i>
    </button>

    </form>
  )
}

export default Form

Form.propTypes = {
  data: PropTypes.object,
}
