// Stateless Component = any component that does NOT have a state property 
//RENDERING is the only way for a component to pass props to another component. 
// Must include an EXPORT statement

import React from 'react';

export class Child extends React.Component {
    render() {
        return <h1>Hey, my name is {this.props.name}</h1>
    }
}