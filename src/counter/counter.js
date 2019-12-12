import React, { Component } from 'react';




class Counter extends Component {



  // new way to do this
  state = {counterValue: 0 }
  
  // inc = () => new way to bind
  inc = () => {
    this.setState({ counterValue: this.state.counterValue + 1 })
  }

  dec = () => {
    this.setState({ counterValue: this.state.counterValue - 1 })
  }
// old way // this.inc = this.inc.bind(this)

render() {
    // object destructuring --- line 26 and 25 are esentally the same thing 
  // const counterName = this.props.counterName 
  const { counterName } = this.props
  // line 27 and this:         { this.state.counterValue } same thing but different ways

  const { counterValue } = this.state  
  return(
    <div>
      <h1 style={{ backgroundColor: this.props.counterName, color: 'white', fontSize: '20px' }}>{ this.props.counterName } Counter</h1>
      <p>
        { counterValue }
      </p>
      <button onClick={this.inc}>+</button>
      <button onClick={this.dec}>-</button>
    </div>
  )
}
}

export default Counter; 
