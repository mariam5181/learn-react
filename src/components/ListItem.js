import React from 'react';
import Done from './Done';
import Remove from './Remove';

const ListItem = props =>  {
	const item = props.item;

	const onDone = () => {
		props.toggleCheck(props.item);
	};

	const onTrash = () => {
		props.removeItem(props.item);
	};

	return (<li>
		<Done done = {item.done} onClick={onDone} />
		{item.title}
		<Remove onClick={onTrash} />
	</li>)
};

export default ListItem;
