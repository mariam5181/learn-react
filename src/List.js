import React from 'react';
import ListItem from './ListItem';

const List = props => {
	const {data} = props;

	if( data.length ) {
		return (<ul>{data.map((item, index) => <ListItem item = {item} key={index} />)}</ul>);
	}

	return (<ul></ul>);
	//return (<ul>{data}</ul>);

	//return (<ul>{data.map(item => <ListItem item = {item} key={item.id.toString()} />)}</ul>);
};

export default List;


