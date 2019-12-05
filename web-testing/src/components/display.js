// ### Count Rules

// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, 
// a foul makes it 1 strike. With 1 strike, 
// a foul makes it 2 strikes. 
// With two strikes a foul has no effect, count stays at 2 strikes.



import React from 'react';


class Display extends React.Component {
   render() {
       return (
           <div>

               <h1>Baseball</h1>
            <h1 >strikes:{this.props.strikes}</h1>
            <h1 data-testid="count">balls:{this.props.balls}</h1>
           </div>
       )
   }
}

export default Display;