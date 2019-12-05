// ### Count Rules

// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, 
// a foul makes it 1 strike. With 1 strike, 
// a foul makes it 2 strikes. 
// With two strikes a foul has no effect, count stays at 2 strikes.



import React from 'react';


class Display extends React.Component {
    state = {
        balls: 3,
        strikes: 2,
        hit: false,
    }

    render () {
        <div>
            <h1>Main display</h1>
            <h2>Strikes</h2>
            <h2>Balls</h2>

        </div>
    }
}

export default Display;