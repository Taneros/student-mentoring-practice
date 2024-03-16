import {getNewTodoItem, saveLocalStorageList} from '../../utils/utils.js';
import TodoItem from '../TodoItem/index.js';

function TodoItemForm ( todoList, keyName, defArray ) { //создаем и возвращаем форму для создания дела
  const form = document.createElement( 'form' ); // {type: "form", classList: ["'input-group'" ,'mb-3']}  for human <form></form>
  const input = document.createElement( 'input' ); //<input></input>
  const buttonWrapper = document.createElement( 'div' );
  const button = document.createElement( 'button' )

  form.classList.add( 'input-group', 'mb-3' ); // <form class=input-group mb-3 ></form>
  input.classList.add( 'form-control' );
  input.placeholder = 'Введите название нового дела';
  buttonWrapper.classList.add( 'input-group-append' );
  button.classList.add( 'btn', 'btn-primary' );
  button.textContent = 'Добавить дело'; //<button></button>
  button.disabled = true;

  buttonWrapper.append( button ); //<div><<button></button></div>
  form.append( input );
  form.append( buttonWrapper );

  form.addEventListener( 'submit', function ( e ) {
    e.preventDefault();

    if ( input.value === '' || input.value === undefined ) {
      return; // early return;
    }

    let newItem = getNewTodoItem( defArray, input ) // {id, name, done}

    let todoItem = TodoItem( newItem, keyName, defArray ); // <li>{sfdsdf}</li>

    defArray.push( newItem )
    saveLocalStorageList( defArray, keyName )

    todoList.append( todoItem.item )

    button.disabled = true
    input.value = '';
  } )


  //TODO 
  /**
   *  {
   * type: 'input',
   * value: '231432',
   * disabled: undefined,
   *,
   * 
   * }
    *
    **/
  input.addEventListener( 'input', function () {
    if ( input.value !== '' ) {
      button.disabled = false
    } else {
      button.disabled = true
    }
  } )


  return {
    form,
    input,
    button,
  };

}

export default TodoItemForm