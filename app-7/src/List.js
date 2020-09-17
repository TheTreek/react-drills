import React, { Component } from 'react';

class List extends Component{   
    render(){
        return(
            <div>
                {this.props.list.map((e,i)=>{
                    return (<div key={i}>{e}</div>);
                })}
            </div>
        );
    }
}

export default List;