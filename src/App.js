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
    return DATA.airlines
  }

  const filteredAirports = () => {
    return DATA.airports
  }

  return (
    <div className="app">
    <header className="header">
      <div>
        Show routes on 
        <Select options={filteredAirlines()} onSelect={handleSelectAirline} name={"airlines"}/>
        flying in or out of
        <Select options={filteredAirports()} onSelect={handleSelectAirport} name={"airports"}/>
      </div>
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <Table className="routes-table" columns={columns} rows="" format={formatValue} perPage={25} airline={airline} airport={airport} />
    </section>
    </div>
  )
}

export default App;