import React, { Component, useState } from 'react';
import './App.css';
import DATA from './data'
import Table from './components/Table';

function formatValue(property, value) {
  if (property === 'airline') {
    return DATA.getAirlineById(value).name
  } else {
    return DATA.getAirportByCode(value).name
  }
}

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const App = () => {
  const [airline, setAirline] = useState('All')

  const handleSelectAirline = (e) => { 
    setAirline(e.target.value)
  }

  return (
    <div className="app">
    <header className="header">
      <div>
        Show routes on 
        <select name="airlines" onChange={handleSelectAirline}>
          <option value="All">All airlines</option>
          {DATA.airlines.map(airline => {
            return (
              <option value={airline.name} key={airline.name + airline.src}>{airline.name}</option>
            )
          })}
        </select>
      </div>
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <Table className="routes-table" columns={columns} rows="" format={formatValue} perPage={25} airline={airline}/>
    </section>
    </div>
  )
}

export default App;