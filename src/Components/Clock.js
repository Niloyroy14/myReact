import Button  from './Button';
import React from 'react';

class Clock extends React.Component{

     state = { date: new Date(),local:'bn-BD'};

    // constructor(props){
    //     super(props);
    //     this.state ={ date: new Date(),local:'bn-BD'};
    //     this.handleClick = this.handleClick.bind(this);
    // }

    componentDidMount(){
       this.clockTimer=  setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount(){
       clearInterval(this.clockTimer);
    }

    tick(){
        this.setState({ date: new Date()})
    }

    handleClick = (local)=>{
       this.setState({
           local,
       });
    }

    render(){
        const { date, local } = this.state; 
        
        // let button;

        // if (local === 'bn-BD') {
        //      (
        //          button=<Button change={this.handleClick} local="en-Us"> Click Here </Button>
        //     );
        // } else {
        //     (
        //         button=<Button change={this.handleClick} local="bn-BD"> Click Here </Button>
        //     );
        //  }

        return(
            <div>
                <h1 className="heading">
                    <span className="text"> {local === 'bn-BD' ? 'হ্যালো' :'Hello'} {date.toLocaleTimeString(local)} </span>
                    <img alt="" src="" />
                </h1>

                {local === 'bn-BD' ? (<Button change={this.handleClick} local="en-Us" show={false} />) : ( <Button change={this.handleClick} local="bn-BD"  show />)}
                   {/* {button} */}
                {/* <button type='button' onClick={()=>this.handleClick('en-US')}>Click Here </button> */}
            </div>
     );
    }
}

export default Clock;