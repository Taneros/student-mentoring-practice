import AppTitle from './components/AppTitle/index.js';
import TodoItemForm from './components/TodoItemForm/index.js';
import {getLocalStorageItem, saveLocalStorageList} from './utils/utils.js';
import TodoList from './components/TodoList/index.js';
import TodoItem from './components/TodoItem/index.js';

//defArray = undefined => []
function TodoApp ( container, title, keyName, defArray = [] ) {
    const todoAppTitle = AppTitle( title );
    const todoItemForm = TodoItemForm();
    const todoUL = TodoList(); //<ul></ul>
    const todoItem = TodoItem( todoItemForm.inputValue, keyName, defArray ); // <li>{sfdsdf}</li>

    container.append( todoAppTitle );

    container.append( todoItemForm.form );

    todoUL.append( todoItem.item )

    container.append( todoUL );

    const localData = getLocalStorageItem( keyName ) // `[`{}`, `{}`, `{}`]` => [{}, {}, ]

    // initialisation 
    if ( localData !== null && localData !== '' ) {
        defArray = JSON.parse( localData ) //`[`{}`, `{}`, `{}`]` => [{}, {}, ]

        for ( const itemList of defArray ) {
            // const!

            // itemList.
            // name => value
            const todoItem = TodoItem( itemList.name, keyName, defArray );
            todoUL.append( todoItem.item )
        }
    }
}

export default TodoApp

