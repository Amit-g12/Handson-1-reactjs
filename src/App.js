import React from 'react';
import './App.css';
import LCard from './component/LCard';
import RCard from './component/RCard';
import './component/style.css';

class App extends React.Component{

 
    state = {
      fCard:false,
      sCard:false
    };

  render(){
  return (
   <div className="container" >
    <h1 className="head">Styling using Functional and Class Component</h1>
    <div className="btn">
        <button className="left" onClick={()=> this.setState({fCard:!this.state.fCard})}>To see styling in functional component</button>
        {console.log(this.state.fCard)}
        <button className="right" onClick={()=> this.setState({sCard:!this.state.sCard})}>To see styling in class component</button>
    </div>
    <div className="maincard">
      {this.state.fCard ? <LCard /> : null}
      {this.state.sCard ? <RCard /> : null}
    </div>
   </div>
  );
}
}

export default App;