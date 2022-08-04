import React from 'react';
//the selected name gets displayed

export class Sibling extends React.Component {
    render() {
        // display dynamic information 
        const name= this.props.name;
        return (
            <div>
                <h1>Hey, my name is {name}!</h1>
                <h2>Don't you think {name} is the prettiest name ever?</h2>
                <h2>Sure am glad my parents picked {name}!</h2>
            </div>
        );
    }
}