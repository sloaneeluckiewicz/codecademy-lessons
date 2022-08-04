// Stateful Component = any component that has a state property
// a stateful component passes its state down to a stateless component

import React from 'react';
import ReactDOM from 'react-dom';
// Before a parent component can pass anything to a child component, 
// you MUST import Child into Parent.js
import { Child } from './Child';


class Parent extends React.Component {
    constructor(props){
        super(props)
        this.state = { name: 'Frarthur' };
    }
    render() {
        return <Child name={this.state.name} />;
    }
}

// Rendering <Parent /> will render BOTH components because Parent's render function returns a <Child /> 
ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);