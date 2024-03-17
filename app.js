import AppTitle from './components/AppTitle/index.js';
import TodoItemForm from './components/TodoItemForm/index.js';
import {restoreTodosFromLocalStorage} from './utils/utils.js';
import TodoList from './components/TodoList/index.js';
import TodoItem from './components/TodoItem/index.js';

//defArray = undefined => []
function TodoApp ( container, title, keyName, defArray = [] ) {
    const todoAppTitle = AppTitle( title );
    const todoItemForm = TodoItemForm( addTodoItem );
    const todoUL = TodoList(); //<ul></ul>

    container.append( todoAppTitle );

    container.append( todoItemForm.form );
    container.append( todoUL );

    function addTodoItem ( inputValue ) {
        if ( inputValue ) {
            const todoItem = TodoItem( inputValue, keyName, defArray ); // <li>{sfdsdf}</li>
            todoUL.append( todoItem.item )
        }
    }

    restoreTodosFromLocalStorage( addTodoItem, keyName, defArray )
}

export default TodoApp

