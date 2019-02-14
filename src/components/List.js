import React from 'react';
import ListItem from './ListItem';

const listStyle = {
	listStyle: 'none',
};

const List = props => {
	const {data} = props;

	if( data.length ) {
	 	return (<ul style={listStyle}>{data.map((item, index) => <ListItem item={item} key={index} toggleCheck={props.toggleCheck} removeItem={props.removeItem} />)}</ul>);
	}

	return null;

	//return (<ul>{data.map(item => <ListItem item = {item} key={item.id.toString()} />)}</ul>);
};

export default List;

