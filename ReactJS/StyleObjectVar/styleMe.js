// Style Object Variable
// define a style variable at the top-level scope
// style names are written in camelCase

import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    backgroundColor: 'lightblue',
    color:'darkred',
    marginTop: '20px'
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
    styleMe, 
    document.getElementById('app')
);