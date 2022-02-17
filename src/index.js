import React from 'react';
import ReactDOM from 'react-dom';

const index = 0;

function Clock() {
    return (
        <h1 className="heading" tabIndex={index}>
            <span className="text"> Hello {new Date().toLocaleTimeString()} </span>
            <img alt="" src="" />
        </h1>
    );
}

ReactDOM.render(<Clock />, document.getElementById('root'));
