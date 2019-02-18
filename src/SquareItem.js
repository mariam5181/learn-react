import React from 'react';

const squareItem = {
	width: '100px',
	height: '100px',
	float: 'left',
};

class SquareItem extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {backgroundColor: this.generateRandomColor()};
	}

	generateRandomColor = () => {
		return 'rgb( ' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
	}

	addStyle = () => {
	    const itemBgColor = {backgroundColor: this.state.backgroundColor};
	    return Object.assign({}, squareItem, itemBgColor);
	}

	changeColor = () => {
		this.setState({
      		backgroundColor: this.generateRandomColor()
    	});
	}

	render () {
		return (<div style={this.addStyle()} onClick={this.changeColor}></div>);
	}
}

export default SquareItem;
