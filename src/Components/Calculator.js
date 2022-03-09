import React from "react";
import BoilingVerdic from "./BoilingVerdic";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenheit } from "../lib/Convetor";


class Calculator extends React.Component {

    // state = {
    //     temperature: '',
    // }


    // onTemperatureChange = (e) => {
    //     this.setState({
    //         temperature: e.target.value,
    //     });

    // };

    state = {  temperature: '', scale: 'c', };

    handleChange = (e, scale) => {

        this.setState({
            temperature: e.target.value,
            scale,
        });
        
    };
          // console.log(scale);

    render() {
       

        const { temperature, scale } = this.state;

        const celsius = scale == 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale == 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                {/* <fieldset>
                    <legend>Enter Temperature in Celsius</legend>
                    <input type="text" value={temperature} onChange={this.onTemperatureChange}/>
                </fieldset> */}

                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange} />
                <BoilingVerdic celsius={parseFloat(temperature)} />
            </div >

        );

    }


}


export default Calculator;