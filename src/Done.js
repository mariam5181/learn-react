import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';

const iconStyleCircle = {
    marginRight: 10,
    color: '#ccc',
};

const iconStyleCheck = {
    marginRight: 10,
    color: 'green',
};

const Done = props => {
    const {done} = props;

    if (done) {
        return <FaCheck style={iconStyleCheck} onClick={props.onClick} />;
    } else {
        return <FaCircle style={iconStyleCircle} onClick={props.onClick} />;
    }
};

export default Done;
