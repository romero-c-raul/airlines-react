import React from "react"
import DATA from '../data'

const Select = ({ onSelect }) => {
  return (
    <select name="airlines" onChange={onSelect}>
      <option value="All">All airlines</option>
      {DATA.airlines.map(airline => {
        return (
          <option value={airline.name} key={airline.name + airline.src}>{airline.name}</option>
        )
      })}
    </select>
  )
}

export default Select