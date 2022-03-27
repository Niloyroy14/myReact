import React from "react";

function Button2({ handleClick, children }) {
    
    console.log(`redering button ${children}`);

    return(
        <p>
            <button type="button"  onClick={handleClick}>{children}</button>
        </p>
    );
}

export default React.memo(Button2);