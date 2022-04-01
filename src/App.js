
import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import ClockList from './Components/ClockList';
import Form from './Components/Form';
import Calculator from './Components/Calculator';
import Text from './Components/Composition/Text';
import Emoji from './Components/Composition/Emoji';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import User from './Components/User';
import Counter from './Components/Counter';
import ClickRenderCounter from './Components/RenderProps/ClickRenderCounter';
import HoverRenderCounter from './Components/RenderProps/HoverRenderCounter';
import Section from './Components/Section';
import React, { useCallback, useMemo, useState } from 'react';
import ThemeContext from './Components/ContextApi/ThemeContext';
import { Todo } from './Components/Todo';
import TodoCounter from './Components/TodoCounter';
import TodoClass from './Components/TodoClass';
import MyComponentClass from './Components/MyComponentClass';
import MyComponent from './MyComponent';
import Title from './Components/Title';
import Button2 from './Components/Button2';
import ShowCount from './Components/ShowCount';
import InputForm from './Components/Hooks/InputForm';
import HookCounter from './Components/Hooks/Counter';
import ComplexCounter from './Components/Hooks/ComplexCounter';
import DoubleCounter from './Components/Hooks/DoubleCountmer';
import CounterThree from './Components/Hooks/CounterThree';
import ComponentA from './Components/Hooks/ComponentA';
import GetPost from './Components/Hooks/GetPost';
import GetPost2 from './Components/Hooks/GetPost2';
import LayoutComponent from './Components/Hooks/LayoutComponent';
import LayoutComponent2 from './Components/Hooks/LayoutComponent2';
import About from './Components/About';
import Home from './Components/Home';
import Post from "./Components/Post";
import Header from "./Components/Header";
import Posts from "./Components/Posts";



function App() {
    
    const quantities = [1, 2, 3];

    const [show, setShow] = useState(true);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);
    
    // const isEvenOdd = () => {
    //     return count1 % 2 === 0;
    // }

    const isEvenOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) {   //costly function
            i += 1;
        }
        return count1 % 2 === 0;
    },[count1]);


    return (
        
         <div>
          <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />}/>
                <Route path="/home/*" element={<Home />} >
                    <Route path="world" element={<p>This is Hello World</p>} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:postId" element={<Post />} />
            </Routes>
              
    
        <ClockList quantities={quantities} />
        <Form />
        <Calculator />

        <Emoji>
            {({ addEmoji }) => <Text addEmoji={addEmoji} />}
        </Emoji>

        <br/>

        <ClickCounter />
        <br/>
        <HoverCounter />
        
        <br />
        
        <User name={(isLoggedIn) => (isLoggedIn ? 'Niloy' : 'Guest')} />
        
        <br />
        <br />
        
        {/* <Counter render={(count, incrementCount) => <ClickRenderCounter count={count} incrementCount={incrementCount} />} />
        
        <br />
        <br />
    
        <Counter render={(count, incrementCount) => <HoverRenderCounter count={count} incrementCount={incrementCount} />} /> */}


        <br />
        <br />
        
        {/* <Section/> */}

        <Todo />
        
        <br />
        <br />

        <TodoCounter />

        <br />
        <br />

        <TodoClass/>
        
        <br />
        <br />

        {/* <MyComponentClass /> */}
        <br />
        <br />

        {show && <MyComponent />}

        <p>
            <button type='button' onClick={() => setShow((prevShow) => !prevShow)}> { show? 'Hide post' : 'Show post' }</button>
        </p>

        <br />
        <br />

        <Title />
        <ShowCount count={count1} title="Counter 1" />
        <span>{isEvenOdd ? 'Even' : 'Odd'}</span>
        <Button2 handleClick={incrementByOne}  >increment By One</Button2>

        <hr />
        
        <ShowCount count={count2} title="Counter 2" />
        <Button2 handleClick={incrementByFive}>increment By Five</Button2>
         
        <br />
        <br />

        <InputForm />
        
        <br />
        <br />

        <HookCounter />
        

        <br />
        <br />

        <ComplexCounter />
        
        <br />
        <br />

        <DoubleCounter />
        
        <br />
        <br />

        <CounterThree />
        

        <br />
        <br />

        <ComponentA />
        
        <br />
        <br />

        <GetPost />
        
        <br />
        <br />

        <GetPost2 />

        <br />
        <br />

        <LayoutComponent />
        
        <br />
        <br />

        <LayoutComponent2 />
        
    </div>);
}

export default App;


//for Context Api

// export default class App extends React.Component{
//     state = {
//         theme: 'light',
//         switchTheme: () => {
//             this.setState(({ theme }) => {
//                 if (theme === "dark") {
//                     return {
//                         theme: 'light'
//                     };
//                 }

//                 return {
//                     theme: 'dark'
//                 };
//             });
//         }

//     };

    
//     render() {

//         const { theme,switchTheme } = this.state; 
        
//         return (
//             <div className='app'>
//                 <ThemeContext.Provider value={{ theme,switchTheme }}> <Section/> </ThemeContext.Provider>
//             </div>
//         );

//     }
// }
