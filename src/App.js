import React, { Component } from 'react';
import ReactTable from "react-table";
import {
  Button,
  Glyphicon,
  Panel
} from 'react-bootstrap';
import logo from './logo.svg';
import monsters from './monsters.json'

import './App.css';
import "react-table/react-table.css";

class App extends Component {
  handleClick() {
    // todo
  }
  renderSelectorCell() {
    return (
      <Button bsStyle="success" onClick={this.handleClick}>
        <Glyphicon glyph="plus"/>
      </Button>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pathfinder Playtest Encounter Builder</h1>
        </header>
        <div className="App-flex-wrap">
          <section className="App-left-section">
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">Encounter Info</Panel.Title>
              </Panel.Heading>
              <Panel.Body></Panel.Body>
            </Panel>
          </section>
          <section className="App-right-section">
            <ReactTable
              data={monsters}
              columns={[
                {
                  id: 'selector',
                  Cell: this.renderSelectorCell,
                  maxWidth: 75,
                },
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
          </section>
        </div>
      </div>
    );
  }
}

export default App;
