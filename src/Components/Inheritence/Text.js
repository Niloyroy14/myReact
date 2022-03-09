import React from "react";
import Emoji from "./Emoji";

export default class Text extends Emoji {

    constructor(props) {

        super(props);

    }

        render(){

            let decoratedText = this.addEmoji('i am javascript language', '^');
            return super.render(decoratedText);

        }
    

}





