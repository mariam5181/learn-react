import React from 'react';
import ListItem from './ListItem';

const List = props => {
	const {data} = props;

	return (<ul>{data.map(item => <ListItem item = {item} key={item.id.toString()} />)}</ul>);
};

export default List;


