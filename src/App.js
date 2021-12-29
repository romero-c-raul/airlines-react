import React, { Component } from 'react';
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

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <Table className="routes-table" columns={columns} rows="" format={formatValue} />
  </section>
</div>
)

export default App;