import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      input: ''
    }
  }

  handleChange(val){
    this.setState({input: val});
  }

  addTask = (val)=>{
    this.setState({
      list: [...this.state.list, val],
      input: ''
    });
  }

  render(){
    let list = this.state.list.map((e, i)=>{
      return (<Todo key={i} task={e}/>)
    });

    return(
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={(e)=>this.handleChange(e.target.value)} value={this.state.input}/>
        <button onClick={()=>this.addTask(this.state.input)}>Add</button>
        {list}
      </div>
    )
  };
}

export default App;
