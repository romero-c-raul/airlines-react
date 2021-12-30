import React, { useState } from 'react';
import './App.css';
import DATA from './data'
import Table from './components/Table';
import Select from './components/Select';


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
  const [airport, setAirport] = useState('All')

  const handleSelectAirline = (e) => { 
    setAirline(e.target.value)
  }

  const handleSelectAirport = (e) => {
    setAirport(e.target.value)
  }

  const filteredAirlines = () => {
    if (airline === 'All') {
      return DATA.airlines.map(currentAirline => {
        currentAirline.disabled = null
        return currentAirline
      })
    } else {
      return DATA.airlines.map(currentAirline => {
        if (currentAirline.name === airline) {
          currentAirline.disabled = false
        } else {
          currentAirline.disabled = true
        }

        return currentAirline
      })
    }
  }

  const filteredAirports = () => {
    if (airport === 'All') {
      return DATA.airports.map(currentAirport => {
        currentAirport.disabled = null
        return currentAirport
      })
    } else {
      return DATA.airports.map(currentAirport => {
        if (currentAirport.name === airport) {
          currentAirport.disabled = false
        } else {
          currentAirport.disabled = true
        }

        return currentAirport
      })
    }
  }

  const resetState = () => {
    setAirport('All')
    setAirline('All')
  }

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
      <div>
        Show routes on 
        <Select options={filteredAirlines()} onSelect={handleSelectAirline} name={"airlines"} state={airline}/>
        flying in or out of
        <Select options={filteredAirports()} onSelect={handleSelectAirport} name={"airports"} state={airport}/>
        <button onClick={resetState}>Clear</button>
      </div>
    </header>
    <section>
      <Table className="routes-table" columns={columns} rows="" format={formatValue} perPage={25} airline={airline} airport={airport} />
    </section>
    </div>
  )
}

export default App;