import React from 'react';
import ReactDOM from 'react-dom';
// const elem = React.createElement('h1', null, 'Hello world!');
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    Hello -{this.props.children} {new Date().toLocaleDateString()}
                </span>
            </h1>
        );
    }
}

ReactDOM.render(<Clock local="bn-BD"> test </Clock>, document.getElementById('root'));
