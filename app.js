import AppTitle from './components/AppTitle/index.js';
import TodoItemForm from './components/TodoItemForm/index.js';
import {getLocalStorageItem} from './utils/utils.js';
import TodoList from './components/TodoList/index.js';
import TodoItem from './components/TodoItem/index.js';


//defArray = undefined => []
function TodoApp ( container, title, keyName, defArray = [] ) {
    const todoAppTitle = AppTitle( title );
    const todoList = TodoList();
    const todoItemForm = TodoItemForm( todoList, keyName, defArray );

    container.append( todoAppTitle );
    container.append( todoItemForm.form );
    container.append( todoList );

    //const!
    const localData = getLocalStorageItem( keyName )

    if ( localData !== null && localData !== '' ) {
        defArray = JSON.parse( localData )
    }

    for ( const itemList of defArray ) {
        // const!
        const todoItem = TodoItem( itemList, keyName, defArray );
        todoList.append( todoItem.item )
    }

}

export default TodoApp

