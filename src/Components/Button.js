import React from 'react';

class Button extends React.Component{

    render() {
        
        const { change,local,show } = this.props; 

        return (
            <div>
                <button type='button' onClick={() => change(local)}> {local === 'bn-BD' ? 'Change Clock' :'গতি পরিবর্তন করুন'} </button>
              
                { show && <p>Hello</p>}
            </div>
        );
    }

}

export default Button;