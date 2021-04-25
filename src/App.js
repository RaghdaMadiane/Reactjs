import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component{
  render(){
    return(
      <div>
      <Webapp></Webapp>
      <Counter></Counter>
      </div>
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
class Webapp extends React.Component{
   constructor(){
    super();
    this.state={
      id:1,
      jobTitleName:"Developer",
      LastName:"Ali",
      preferredFullName:"Ahmed Ali" ,
      employeeCode:"E1",
      region:"CA",
      phoneNumber:"408-1234567",
      emailAddress:"ahmed.ali@gmail.com",
    }
    }
      render(){
    return(
          <div className = "box" >
      
         <ul><li>id :{this.state.id}  </li>
       
         <li>jobTitleName:{this.state.jobTitleName}</li>
        <li>LastName:{this.state.preferredFullName}  </li>
       <li> code:{this.state.employeeCode} </li>
       <li>  phoneNumber:{this.state.phoneNumber}</li>
        <li>  email:{this.state.emailAddress}</li>
         <li> region:{this.state.region}</li></ul> 
         
      </div>
    )
    }
  
}

export default App;