import React, { useState } from 'react'
import DATA from '../data'

const Table = ({ columns, rows, format, perPage, airline }) => {
  const [page, setPage] = useState(0)

  const nextPage = (e) => {
    setPage(page + 1)
  }

  const prevPage = (e) => {
    setPage(page - 1)
  }

  const start = page * perPage

  // In filtered routes, I am filtering all the data from the routes based on the airline and airport state
  const filteredRoutes = () => {
    let selectedRoutes = null

    if (airline === 'All') {
      selectedRoutes = DATA.routes
    } else {
      selectedRoutes = DATA.routes.filter(route => {
        return DATA.getAirlineById(route.airline).name === airline
      })
    }

    return selectedRoutes
  }

  const routesToDisplay = () => {
   const selection = filteredRoutes().slice(start, start + perPage)
   return selection.map(route => {
      return (
        <tr key={route.airline + route.src + route.dest}>
          <td>{format("airline", route.airline) }</td>
          <td>{format("src", route.src)}</td>
          <td>{route.dest}</td>
        </tr>
      )
    })
  }

  const routesCount = filteredRoutes().length

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map(column => {
              return (
                <th key={column.name}>{column.name}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {routesToDisplay()}
        </tbody>
      </table>
      <button 
        onClick={prevPage}
        disabled={start <= 1 ? true : false}  
      >
        Previous page
      </button>
      Showing {start + 1} - {start + perPage > routesCount ? routesCount : start + perPage} of {routesCount} routes.
      <button 
        onClick={nextPage} 
        disabled={start + perPage >= routesCount ? true : false}
      >
        Next page
      </button>
    </div>
  )
}

export default Table