import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import monsters from './monsters.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pathfinder Playtest Encounter Builder</h1>
        </header>
        <ReactTable
          data={monsters}
          columns={[
            {
              Header: "Name",
              accessor: "name",
            },
            {
              Header: "Level",
              accessor: "level",
            },
            {
              Header: "Source",
              accessor: "source",
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default App;
