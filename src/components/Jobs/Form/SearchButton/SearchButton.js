import React from 'react'

export default function SearchButton(props) {
  return (
    <button
      type="submit"
      className={`btn btn-primary mb-2 submit-button search ${
        props.theme === 'light' ? 'light-theme' : 'dark-theme'
      }`}
    >
      <i className="glyphicon glyphicon-search">&nbsp;Search</i>
    </button>
  )
}
