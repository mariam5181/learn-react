import React from 'react';
import UserInput from './UserInput';
import List from './List';

import { connect } from 'react-redux';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    onSubmit = inputValue => {
        this.setState({
            tasks: [
                ...this.state.tasks,
                {
                    id: Date.now(),
                    title: inputValue,
                    done: false,
                }
            ]
        });
    };

    toggleCheck = (item) => {
        const tasks = this.state.tasks.map( (i) => {
            if(i.id === item.id) {
                return {
                    ...i,
                    done: !item.done,
                };
            }
            return i;
        });

        this.setState({ tasks });
    };

    removeItem = item => {
        const tasks = this.state.tasks.filter(currentItem => {
            if(currentItem.id !== item.id) {
                return true;
            }

            return false;
        });

        this.setState({ tasks });
    };

    render() {
        //console.log(this.props);
        return (<div>
            <UserInput onSubmit={this.onSubmit} />
            <List data={this.state.tasks} toggleCheck={this.toggleCheck} removeItem={this.removeItem} />
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
