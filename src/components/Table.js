import React, { useState } from 'react'
import data from '../data'
import DATA from '../data'

const Table = ({ columns, rows, format, perPage }) => {
  const [page, setPage] = useState(0)

  const nextPage = (e) => {
    setPage(page + 1)
  }

  const prevPage = (e) => {
    setPage(page - 1)
  }

  // const maxRoutesPerPage = 25
  const start = page * perPage

  const routesToDisplay = () => {
    const selection = DATA.routes.slice(start, start + perPage)

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

  return (
    <div>
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
          {routesToDisplay()}
        </tbody>
      </table>
      <button 
        onClick={prevPage}
        disabled={start <= 1 ? true : false}  
      >
        Previous page
      </button>
      Showing {start + 1} - {start + perPage > data.routes.length ? data.routes.length : start + perPage} of {data.routes.length} routes.
      <button 
        onClick={nextPage} 
        disabled={start + perPage >= data.routes.length ? true : false}
      >
        Next page
      </button>
    </div>
  )
}

export default Table