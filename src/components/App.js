import React, { Component } from 'react';
import Table from './table';
import Form from './form';
import logo from '../logo.svg';
import '../css/App.css';

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
        <form>
          <input value={this.state.MPY} onChange={this.onChange} name="MPY" id="MPY" type="text" placeholder="Miles Per Year" />
          <input value={this.state.PPG} onChange={this.onChange} name="PPG" id="PPG" type="text" placeholder="Price Per Gallon" />
        </form>
        <button className="btn btn-primary btn-lg" onClick={this.clicked}>Add Entry</button>
        <div className="content">
          {this.state.formShow ? <Form createEntry={this.createEntry} clicked={this.clicked} /> :<p></p>}
          
          <Table entries={this.state.entries} MPY={this.state.MPY} PPG={this.state.PPG}x/>
        </div>
      </div>
    );
  }
}

export default App;
