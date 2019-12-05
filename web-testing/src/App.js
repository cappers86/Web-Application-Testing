import React from 'react';
import Display  from './components/display';
import Dashborard  from './components/dashboard';
import './App.css';

class App extends React.Component {
  state ={
    strike: 0,
    ball: 0,
    hit: 0,
    foul: 0,
  }

  plusStrike = (e) => {
    e.preventDefault();
      if(this.state.strike < 2) {
        this.setState({
          strike: this.state.strike + 1
        })
      } else {
        this.setState({
          strike:0,
          ball:0
        })
      }
    }

    plusBall = (e) => {
      e.preventDefault();
        if(this.state.ball < 3) {
          this.setState({
            ball: this.state.ball + 1
          })
        } else {
          this.setState({
            strike:0,
            ball:0
          })
      }
    }
    
    plusFoul = (e) => {
      e.preventDefault();
      if (this.state.strike < 2) {
        this.setState({
          strike: this.state.strike + 1
        })
      } else {
        this.setState({
          ...this.state
        })
      }
    }
   plusHit = (e) => {
     e.preventDefault();
     this.setState({
       hit: this.state.hit +1,
       strike: 0,
       ball: 0
     })
   }

   render() {
     return (
       <div>
         <Display strikes = {
           this.state.strike
         }

         balls = {
           this.state.ball
         }
         />

         <Dashborard plusStrike ={
           this.plusStrike
         }
         plusBall ={
           this.plusBall
         }
         plusFoul ={
           this.plusFoul
         }
         plusHit ={
           this.plusHit
         }
                
         />
       </div>
     );
       
     
   }
}
                
         
export default App;
