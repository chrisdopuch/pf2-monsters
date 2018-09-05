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
  constructor(props) {
    super(props);
    this.state = {
      selections: {},
    };
    this.renderSelectorCell = this.renderSelectorCell.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(value) {
    const {
      selections,
    } = this.state;
    this.setState({
      selections: {
        ...this.state.selections,
        [value]: selections[value] !== undefined ? this.state.selections[value] + 1 : 1,
      }
    });
  }
  renderSelectorCell({ row }) {
    return (
      <Button bsStyle="success" onClick={() => this.handleClick(row.name)}>
        <Glyphicon glyph="plus"/>
      </Button>
    );
  }
  render() {
    const selectedKeys =  Object.keys(this.state.selections);
    const selectedMonsters = selectedKeys ?  selectedKeys.map((key) => (<p key={key}>{key} x {this.state.selections[key]}</p>)) : 'No monsters selected';
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
              <Panel.Body>{selectedMonsters}</Panel.Body>
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
                  Header: 'Name',
                  accessor: 'name',
                },
                {
                  Header: 'Level',
                  accessor: 'level',
                },
                {
                  Header: 'Source',
                  accessor: 'source',
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
