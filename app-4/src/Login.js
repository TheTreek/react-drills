import React, { Component } from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            userName: '',
            userPass: ''
        }
    }

    handleUserName(val){
        this.setState({userName: val})
    }

    handlePassword(val){
        this.setState({userPass: val})
    }

    submit(user,pass){
        alert(`Username: ${user}     Password: ${pass}`)
        this.setState({userName: '', userPass: ''});
    }

    render(){
        return(
            <div>
                <input className='userName' type='text' value={ this.state.userName } onChange={(e)=>this.handleUserName(e.target.value)}/>
                <input className='password' type='password' value={ this.state.userPass } onChange={(e)=>this.handlePassword(e.target.value)}/>
                <button className='button' onClick={()=>this.submit(this.state.userName,this.state.userPass)}>Login</button>
            </div>
        );
    }
}

export default Login;