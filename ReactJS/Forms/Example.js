// form's server should know about every new character or deletion as it happens
// Input onChange and input event handlers 

import React from 'react';

export class Example extends React.Component {
    // set input's initial state
    constructor(props) {
        super(props);
        this.state = { userInput: '' };
        // bind handleChange() to the current value of this
        this.handleChange = this.handleChange.bind(this);
    }

    // this function will be an event handler and listen for change events
    // will be called whenever user makes an input change
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    render() {
        return (
            <input 
                onChange={this.handleChange}
                type="text" 
                //make input's text responsive to this.state.userInput
                value={this.state.userInput}
                />
        )
    }
}