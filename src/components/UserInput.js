import React from 'react';

// import { connect } from 'react-redux';

// import { handleKeyPress } from '../actions/userInputActions';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            if(!this.state.value) return;

            this.props.onSubmit(this.state.value);

            // this.props.dispatch(handleKeyPress(this.state.value));

            this.setState({ value: '' });
        }
    };

    onChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (<input type="text" onChange={this.onChange} onKeyPress={this.handleKeyPress} value={this.state.value} />);
    }
}

export default UserInput;
