import React from "react"


export default class ClickRenderCounter extends React.Component {
    
    render() {
         
        const { count, incrementCount } = this.props;

        return (

            <div>
                <button type="button" onClick={incrementCount}>Clicked {count} times</button>
            </div>

        );
    }

}









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