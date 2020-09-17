import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List'

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      list: []
    };
  }

  addTask = (task)=>{
    this.setState({list: [...this.state.list, task]})
  }

  render(){
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask addTask={this.addTask}/>
        <List list={this.state.list}/>

      </div>
    );
  }
}

export default App;
