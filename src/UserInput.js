import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            if(!this.state.value) return;

            this.props.onSubmit(this.state.value);

            this.setState({ value: '' });
        }
    };

    onChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render = () => (
        <input type="text" onChange={this.onChange} onKeyPress={this.handleKeyPress} value={this.state.value} />
    );
}

export default UserInput;
