import React from 'react';
import Display  from './components/display';

import './App.css';

class App extends React.Component {
  state ={
    strik: 0,
    ball: 0,
    hit: 0,
    foul: 0,
  }

  plusStrike = (e) => {
    e.prevemtDefault();
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
      e.prevemtDefault();
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
      e.prevemtDefault();
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
     e.prevemtDefault();
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
       </div>
     )
       
     
   }
}
                
         
export default App;
