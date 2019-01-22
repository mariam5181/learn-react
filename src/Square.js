import React from 'react';
import SquareItem from './SquareItem';

const square = {
    width: '400px',
    height: '400px',
    overflow: 'hidden',
};

class Square extends React.Component {
	createTable = () => {
	    let squareArr = [];

	    for (let i = 1; i <=16; i++) {
	      squareArr.push(<SquareItem key={i}/>)
	    }
	    return squareArr
	}

	render() {
		return (<div style={square}>{this.createTable()}</div>);
	}
}

export default Square;
