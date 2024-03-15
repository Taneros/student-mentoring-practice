import {getNewId, getNewTodoItem, saveLocalStorageList} from '../../utils/utils.js';
import TodoItem from '../TodoItem/index.js';

function TodoItemForm ( todoList, keyName, defArray ) { //создаем и возвращаем форму для создания дела
  let form = document.createElement( 'form' ); // <form></form>
  let input = document.createElement( 'input' ); //<input></input>
  let buttonWrapper = document.createElement( 'div' );
  let button = document.createElement( 'button' )

  form.classList.add( 'input-group', 'mb-3' ); // <form class=input-group mb-3 ></form>
  input.classList.add( 'form-control' );
  input.placeholder = 'Введите название нового дела';
  buttonWrapper.classList.add( 'input-group-append' );
  button.classList.add( 'btn', 'btn-primary' );
  button.textContent = 'Добавить дело'; //<button></button>
  button.disabled = true

  input.addEventListener( 'input', function () {
    if ( input.value !== '' ) {
      button.disabled = false
    } else {button.disabled = true}
  } )


  buttonWrapper.append( button ); //<div><<button></button></div>
  form.append( input );
  form.append( buttonWrapper );

  form.addEventListener( 'submit', function ( e ) {
    e.preventDefault();

    if ( !input.value ) {
      return;
    }

    let newItem = getNewTodoItem( defArray, input )

    let todoItem = TodoItem( newItem, keyName, defArray );

    defArray.push( newItem )
    saveLocalStorageList( defArray, keyName )

    todoList.append( todoItem.item )

    button.disabled = true
    input.value = '';
  } )

  return {
    form,
    input,
    button,
  };

}

export default TodoItemForm