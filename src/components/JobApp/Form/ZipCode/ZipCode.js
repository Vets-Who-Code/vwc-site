import React from 'react'

export default function ZipCode() {
  return (
    <span>
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
    </span>
  )
}
