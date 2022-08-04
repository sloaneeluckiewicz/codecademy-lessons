import React from 'react';

export class Child extends React.Component {
    // bind THIS to our new method to the current instance of Child
    // bind .handleChange() to the current value of THIS
    constructor(props){
        super(props);
        this.handleChange= this.handleChange.bind(this);
    }

    // create new function that takes an event object as an argument,
    // extract the name you want from that event object,
    // and call the event handler, passing in the extracted name
    handleChange(e){
        const name= e.target.value;
        this.props.onChange(name);
    }

    // in render, change the event handler from {this.props.onChange} to {this.handleChange}
    render() {
        return (
            <div>
                <h1>
                    Hey my name is {this.props.name}!
                </h1>
                <select id="great-names" onChange={this.handleChange}>

                    <option value="Frarthur">
                        Frarthur
                    </option>

                    <option value="Gromulus">
                        Gromulus
                    </option>

                    <option value="Thinkpiece">
                        Thinkpiece
                    </option>
                </select>
            </div>
        );
    }
}