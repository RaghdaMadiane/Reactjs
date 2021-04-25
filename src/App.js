import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component{
  render(){
    return(
      <Counter></Counter>
    )
  }
}
class Counter extends React.Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  Increase=()=>{
    this.setState({count:this.state.count+1})
  } 
  Decrease=()=>{
    this.setState({count:this.state.count-1})
  }
    render() {
        return ( 
          <div className = "App" >
           <div>{this.state.count}</div>
           <button onClick={this.Decrease}> Decrease</button>
           <button onClick={this.Increase}> Increase</button>
            
             </div>
        );
    }
}

export default App;