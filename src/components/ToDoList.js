import React from 'react';
import UserInput from './UserInput';
import List from './List';

import { connect } from 'react-redux';

import { addListItem, toggleCheck, removeListItem } from '../actions/toDoListActions';

class ToDoList extends React.Component {
    onSubmit = inputValue => {
        this.props.dispatch(addListItem(inputValue));
    };

    toggleCheck = (item) => {
        this.props.dispatch(toggleCheck(item));
    };

    removeItem = item => {
        this.props.dispatch(removeListItem(item));
    };

    render() {
        return (<div>
            <UserInput onSubmit={this.onSubmit} />
            {/*<List data={this.state.tasks} toggleCheck={this.toggleCheck} removeItem={this.removeItem} />*/}
            <List toggleCheck={this.toggleCheck} removeItem={this.removeItem} tasks={this.props.tasks}/>
        </div>);
    };
}

/*const ToDoList = props => {
    //const {data} = props;
    console.log(props);
    return (<div><input type="text" value={props.test} onChange={} /></div>);
    //return (<ul>{data.map(item => <ListItem item = {item} key={item.id.toString()} />)}</ul>);
};*/

export default connect((store) => {
    return {
        tasks: store.toDoList.tasks
    }
})(ToDoList);
