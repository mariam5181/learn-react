import React from 'react';
// import logo from '../logo.svg';
import '../App.css';

// import Square from './Square';

//import data from "./data.json";
import ToDoList from './ToDoList'

// class App extends React.Component {
//     render() {
//         return <Square />;
//     }
// }

// class App extends React.Component {
//   render() {
//     return <List data = {data} />;
//   }
// }

class App extends React.Component {
    render() {
        return <ToDoList />;
    }
}

export default App;
