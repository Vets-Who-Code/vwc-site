import React from 'react'

export default function Checkbox() {
  return (
    <span>
      <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
      <label className="form-check-label" htmlFor="inlineFormCheck">
        Remote?
      </label>
    </span>
  )
}
