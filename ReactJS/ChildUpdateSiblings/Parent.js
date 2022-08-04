import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
    constructor(props){
        super(props);

        this.state = { name: 'Frarthur' };

        this.changeName= this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    // pass the name to <Sibling />
    // Child is only supposed to CHANGE the chosen name, not display it
    render() {
        return (
            <div>
                <Child 
                    onChange={this.changeName} />
                <Sibling name={this.state.name} />
            </div>
        );
    }
}