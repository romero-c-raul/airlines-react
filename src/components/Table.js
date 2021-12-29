import React from 'react'
import DATA from '../data'

const Table = ({ columns, rows, format }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th>{column.name}</th>
            )
          })}
        
        </tr>
      </thead>
      <tbody>
        {DATA.routes.map(route => {
          return (
            <tr>
              <td>{format("airline", route.airline) }</td>
              <td>{format("src", route.src)}</td>
              <td>{route.dest}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table