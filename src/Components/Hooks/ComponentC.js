
import React, { useContext } from "react";
import { counterContext } from "./ComponentA";

export default function ComponentC() {

    const countContext = useContext(counterContext);
    
    return (

        <div>
            <div>
                <button type="button" onClick={() => countContext.countDispatch('increment')} >Increment </button>
                <button type="button" onClick={() => countContext.countDispatch('decrement')} >Decrement </button>
            </div>
        </div>
      
  );

}