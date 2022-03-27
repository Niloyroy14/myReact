import React from "react";

export default class MyComponentClass extends React.Component{

    state = {
        count: 0,
        date: new Date()
    };

    componentDidMount() {
        const { count } = this.state;
        document.title = `Clicked ${count} Times`;
       this.interval =  setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} Times`;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        console.log('clock ticking');
        this.setState({
            date: new Date(),
        });
    }

    addClick = () => {
        this.setState(({ count }) => ({
           count: count + 1
        }));
     };

    render() {
        const { date } = this.state;
        return (
            <div>
                <p>Time:{ date.toLocaleTimeString()}</p>
                <p>
                    <button type="button" onClick={this.addClick}>Click</button>
                </p>
            </div>
        );
     }




}