import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component{
    constructor(props){
        super(props);

        this.state= { name: 'Frarthur' };

        // bind this.changeName to the current value of this and store it in this.changeName
        this.changeName= this.changeName.bind(this)
    }

    // new function that can change Child's this.state.name
    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        // pass .changeName() down to the Child by giving it an onChange event
        return <Child name={this.state.name} onChange={this.changeName} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);