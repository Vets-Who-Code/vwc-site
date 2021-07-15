import React from 'react'
import SearchButton from './SearchButton/SearchButton'
import Remote from './Remote/Remote'
import ZipCode from './ZipCode/ZipCode'
import Distance from './Distance/Distance'

export default function Form(props) {
  return (
    <form onSubmit={event => props.data(event)} className="form-inline text-center job-grabber">
      <ZipCode />
      <Remote />
      <Distance />
      <SearchButton theme={props.theme} />
    </form>
  )
}
