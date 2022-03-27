import withCounter from "./HOC/withCounter";


const hoverCounter = (props) => {
    
    const { count, incrementCount } = props;

        return (

            <div>
                <h1  onMouseOver={incrementCount}>Hovered {count} times</h1>
            </div>

        );

}


export default withCounter(hoverCounter);






// import React from "react";

// class ClickCounter extends React.Component{

//     state = {
//         count: 0,
//     }


//     incrementCount = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     }


   
//     render() {

//         const { count } = this.state;
        
//         return (

//             <div>
//                 <button type="button" onClick={this.incrementCount}>Clicked {count} times</button>
//             </div>

//         );

//     }


// }

// export default ClickCounter;










// import React from "react";

// class HoverCounter extends React.Component {


//     state = {
//         count: 0,
//     }


//     incrementCount = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     }



//     render() {

//         const { count } = this.state;

//         return (
//             <div>
//                 <h1  onMouseOver={this.incrementCount}>Hovered {count} times</h1>
//             </div>

//         );

//     }


// }

// export default HoverCounter;