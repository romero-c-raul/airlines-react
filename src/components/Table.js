import React from 'react'
import DATA from '../data'

const Table = () => {
  return (
    <table>
      <tbody>
        {DATA.routes.map(route => {
          return (
            <tr>
              <td>{DATA.getAirlineById(route.airline) }</td>
              <td>{DATA.getAirportByCode(route.src)}</td>
              <td>{route.dest}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table