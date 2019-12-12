// import React from 'react';
import React, { Component } from 'react';
import Counter from './counter/counter';



//                React.Component
class App extends Component {
  // // old way to do this. 
  // constructor(props) {
  //   super(props)
  //   this.state = { counterValue: 0 }
  //   // state is like storage
  //   // object is always a hash 
  //   // props are properties
  //   // this.state is calling what is in another file


//   // new way to do this
//   state = {counterValue: 0 }
  
//   // inc = () => new way to bind
//   inc = () => {
//     this.setState({ counterValue: this.state.counterValue + 1 })
//   }

//   dec = () => {
//     this.setState({ counterValue: this.state.counterValue - 1 })
//   }
// // old way // this.inc = this.inc.bind(this)


  render() {
    return(
      <div>
        {/* <h1>React Counter</h1> */}
{/* //         <p>
//           { this.state.counterValue }
//         </p>
//         <button onClick={this.inc}>+</button>
//         <button onClick={this.dec}>-</button>

//       </div> */}
        <Counter counterName='red' />
        <Counter counterName='blue' />
        <Counter counterName='black' />
        <Counter counterName='green' />
      </div>
    )
  }
}
// ReactCreateComponent(h1)ReactCreateComponent(p)
// ReactCreateComponent(div)
export default App;
