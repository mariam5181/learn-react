import React from 'react';
import Done from './Done';
//import PropTypes from 'prop-types';

const ListItem = props =>  {
	const item = props.item;

	return (<li>
		{item}
		<Done />
	</li>)
};

export default ListItem;
