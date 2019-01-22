import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props =>  {
	const item = props.item;

	return (<li>{item.first_name} {item.last_name},{item.gender}, {item.age} years old</li>)
};

export default ListItem;