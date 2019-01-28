import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: []};
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            let newValue = this.state.value.concat(event.target.value);
            this.setState({ value: newValue });

            this.props.onSubmit(newValue);

            event.target.value = '';
        }
    }

    render = () => (
        <input type="text" onKeyPress={this.handleKeyPress} value={this.state.text} />
    );
}

export default UserInput;
