import React from 'react';
import Footer from './Footer';
import TodoList from './TodoList';
import AddTodo from '../containers/AddTodo';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// pure presentational component
//sth about App

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

// const App = () => (
//   <div>
//     <TodoList />
//     <Footer />
//   </div>
// );

export default App;