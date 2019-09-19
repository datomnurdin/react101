import React from 'react';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      name:"Mohammad Nurdin",
      age:30
    }
  }
  
  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}

export default App