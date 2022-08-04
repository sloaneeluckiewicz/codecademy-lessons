import React from 'react';
// import PropTypes
import PropTypes from 'prop-types';

export class BestSeller extends React.Component {
    render() {
        return(
            <li>
                Title: <span>
                    {this.props.title}
                </span><br />

                Author: <span>
                    {this.props.author}
                </span><br />

                Weeks: <span>
                    {this.props.weeksOnList}
                </span>
            </li>
        );
    }
}

// value is an object 
/*
properties:
name = name of expected prop
value = should fit the patter of: PropTypes.expected_data_type_goes_here
*/
BestSeller.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    weeksOnList: PropTypes.number.isRequired
};