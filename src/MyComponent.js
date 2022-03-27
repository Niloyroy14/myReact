import React, { useEffect, useState } from "react";

export default function MyComponent() {


    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
   // const [text, setText] = useState('');

    const tick = () => {
        console.log('clock ticking');
        setDate(new Date());
    }

    useEffect(() => {
        console.log('updating title');
        document.title = `Clicked ${count} times`;
    }, [count])
    

    useEffect(() => {

      const interval=  setInterval(tick, 1000);
    
        // do the clean up stop the timer
        return () => {
            console.log('component unmount');
            clearInterval(interval);
         }

    });

    const addClick = () => {
        setCount((prevState) => prevState + 1);
    }
     
    return (
        <div>
            <p>Time:{date.toLocaleTimeString()}</p>
            {/* <p><input type='text' value={text} onChange={(e) => setText(e.target.value )}   /></p> */}
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    );

}