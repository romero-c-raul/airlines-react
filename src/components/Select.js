import React from "react"

const Select = ({ onSelect, name, options }) => {
  return (
    <select name={name} onChange={onSelect}>
      <option value="All">All {name}</option>
      {options.map(option => {
        return (
          <option value={option.name} key={option.id || option.code}>{option.name}</option>
        )
      })}
    </select>
  )
}

export default Select