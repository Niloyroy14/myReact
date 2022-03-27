import React from "react";


export default class TodoClass extends React.Component {


    state = {
        todo: '',
        warning: null
    };


    handleInput = (e) => {

        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'you need javaScript skill to complete the task. Do you have it?' : '';
        
        this.setState({
            todo: inputValue,
            warning: warning
        });

    }


    render() {

        const { todo, warning } = this.state;
        return (
            <div>
                <p> {todo}</p>
                <p>
                    <textarea name='todo' value={todo} onChange={this.handleInput}> </textarea>
                </p>
                <hr />
                <h2>{warning || 'Good Choice!'}</h2>
            </div>
        );
    }


}