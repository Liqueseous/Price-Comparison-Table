import React, { Component } from 'react';
import Table from './table';
import Form from './form';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      entries: [],
      formshow:false,
      MPY: '',
      PPG: '',
    };
  }
  clicked = (e) => {
    this.setState({formShow: !this.state.formShow});
  }
  createEntry = (e) => {
    console.log(e.cost);
    const myEntries = this.state.entries;
    myEntries.push(e);

    this.setState({ entries:myEntries });
    console.log(myEntries);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
    console.log(`${e.target.name}: ${e.target.value}`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="content">
          <form>
            <div className="form-group">
              <label htmlFor="MPY">Miles Per Year:</label>
              <input className="form-control" value={this.state.MPY} onChange={this.onChange} name="MPY" id="MPY" type="text" placeholder="Miles Per Year" />
            </div>
            <div className="form-group">
						  <label htmlFor="PPG">Price Per Gallon:</label>
              <input className="form-control"value={this.state.PPG} onChange={this.onChange} name="PPG" id="PPG" type="text" placeholder="Price Per Gallon" />
            </div>
          </form>
          <button className="btn btn-primary btn-lg" onClick={this.clicked}>Add Entry</button>
            {this.state.formShow ? <Form createEntry={this.createEntry} clicked={this.clicked} /> :<p></p>}
          <div className="alert alert-info">
            <strong>Info!</strong> Verticle column represents MPG, horizontal row represents total cost of vehicle.
          </div>
          <Table entries={this.state.entries} MPY={this.state.MPY} PPG={this.state.PPG}x/>
        </div>
      </div>
    );
  }
}

export default App;
