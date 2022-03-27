import Counter from "./Counter";
import HoverCounter from "./ContextApi/HoverCounter";
import ThemeContext from "./ContextApi/ThemeContext";
import React from "react";
import { useContext } from "react";


export default function Content() {

    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;

    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(count, incrementCount) => (
                    // <ThemeContext.Consumer>
                    //     {({ theme, switchTheme }) => (
                    //         <HoverCounter
                    //             count={count}
                    //             incrementCount={incrementCount}
                    //             theme={theme}
                    //             switchTheme={switchTheme}
                    //         />
                    //     )}
                    // </ThemeContext.Consumer>
                      
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                    
                )}
            </Counter>

          
        </div>
    );

}









// export default class Content extends React.Component{

//     componentDidMount() {
//         console.log(this.context);
//     }

//     render() {

//         const { theme, switchTheme } = this.context;
        
//         return (
            
//             <Counter>
//                {(count, incrementCount) => (
//                     <HoverCounter
//                         count={count}
//                         incrementCount={incrementCount}
//                         theme={theme}
//                         switchTheme={switchTheme}
//                     />
//                 )}
//             </Counter>

//         );
//     }

// }

// Content.contextType = ThemeContext;

