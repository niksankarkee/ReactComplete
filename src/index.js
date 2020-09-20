// Import the React and ReactDOM libraries
import React from 'react';
import { render } from 'react-dom';


// Create a react component

const App = () => {
    const style = { backgroundColor: 'blue', color: 'white' };
    const buttonText = 'Click Me!'
    return (
        <div>
            <label className="label" htmlFor="name">Enter name: </label>
            <input type="text" id="name" />
            <button style={style}>{buttonText}</button>
        </div>

    );
};


// Take the react component and show it on the screen
render(<App />, document.querySelector('#root'));