import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';

// function Card(props){
//   return (
//     <div className="App">
    
//       <header className="App-header">
//         <button className="card" onClick={props.onClick}>
//           {props.value}
//         </button>
//         <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
        
//       </header>
//     </div>
//     );
    
class App extends React.Component {
  
    constructor(props){
    super(props)
    this.state={xIsFace: true,
      //cards: [{face: "queen", down: true}, 
      //        {face: "king", down:true},
      //        {face: "ace", down: true}] 
      }
    }
    flip() {
      //let copy = this.state.cards.slice();
      //copy[i].down = !copy[i].down
        this.setState({
          xIsFace: !this.state.xIsFace,
        });
    }
    render(){
      //let cards = this.state.cards.map(
        //(card, i) => 
        // <Card 
        // />
  
      return( 
        <div className ="App">
          <Card 
           onClick={() => this.flip()}
            xIsFace={this.state.xIsFace} />
        </div>
    );
  }
}
export default App;
