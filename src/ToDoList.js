import React from 'react';
import UserInput from './UserInput';
import List from './List';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    onSubmit = inputValue => {
        this.setState({value: inputValue});
    }

    render = () => (
        <div>
            <UserInput onSubmit={this.onSubmit} />
            <List data = {this.state.value} />
        </div>
    );
}

/*const ToDoList = props => {
    //const {data} = props;
    console.log(props);
    return (<div><input type="text" value={props.test} onChange={} /></div>);
    //return (<ul>{data.map(item => <ListItem item = {item} key={item.id.toString()} />)}</ul>);
};*/

export default ToDoList;
