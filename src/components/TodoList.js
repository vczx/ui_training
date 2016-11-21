import React, { PropTypes } from 'react';
import Todo from './Todo';

// class TodoList extends React.Component{
//     render(){
//         return(
//             <ul>
//             <Todo />
//         </ul>
//         );
//     }
// }
const TodoList = (() => {
    return (
        <ul>
            <Todo />
        </ul>
    );
}
);

export default TodoList;
