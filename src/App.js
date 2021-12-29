import React, { Component } from 'react';
import './App.css';
import DATA from './data'

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <p>
      Welcome to the app!
    </p>
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
  </section>
</div>
)

export default App;