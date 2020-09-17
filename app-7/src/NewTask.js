import React, { Component } from 'react';

class NewTask extends Component{
    constructor(){
        super()
        this.state={
            input: ''
        }
    }

    handleChange(val){
        this.setState({input: val});
    }

    render(){
        return(
            <div>
                <input onChange={(e)=>this.handleChange(e.target.value)} value={this.state.input}/>
                <button onClick={()=>{this.props.addTask(this.state.input);this.setState({input:''})}}>Add</button>
            </div>
        )
    };
}

export default NewTask;