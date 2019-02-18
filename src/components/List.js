import React from 'react';
import ListItem from './ListItem';

const listStyle = {
	listStyle: 'none',
};

const List = (props) => {

	if(!props.tasks.length) return null;

	return (
		<ul style={listStyle}>
			{
				props.tasks.map((item, index) => (
					<ListItem
						item={item}
						key={index}
						toggleCheck={props.toggleCheck}
						removeItem={props.removeItem}
					/>
				))
			}
		</ul>
		);

	//return (<ul>{data.map(item => <ListItem item = {item} key={item.id.toString()} />)}</ul>);
};

export default List;
