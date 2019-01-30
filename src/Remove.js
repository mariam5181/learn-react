import React from 'react';
import { FaTrash } from 'react-icons/fa';

const iconStyleTrash = {
    marginLeft: 10,
    color: 'red',
    fontSize: 14,
};

const Remove = props => {
    return <FaTrash style={iconStyleTrash} onClick={props.onClick} />;
};

export default Remove;
