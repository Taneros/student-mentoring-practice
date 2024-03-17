import {getNewTodoItem, saveLocalStorageList} from '../../utils/utils.js';

function TodoItem ( inputValue, keyName, defArray ) {

  // rename
  let obj = getNewTodoItem( defArray, inputValue ) // {id, name, done} // newInput 

  defArray.push( obj )

  saveLocalStorageList( defArray, keyName )

  // rename toDoItem
  const item = document.createElement( 'li' );
  const buttonGroup = document.createElement( 'div' );
  const doneButton = document.createElement( 'button' );
  const deleteButton = document.createElement( 'button' );

  item.classList.add( 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center' );
  item.textContent = obj.name;

  buttonGroup.classList.add( 'btn-group', 'btn-group-sm' );
  doneButton.classList.add( 'btn', 'btn-success' );
  doneButton.textContent = 'Готово';
  deleteButton.classList.add( 'btn', 'btn-danger' );
  deleteButton.textContent = 'Удалить';

  if ( obj.done === true ) {
    item.classList.add( 'list-group-item-success' );
  }

  doneButton.addEventListener( 'click', function () {
    item.classList.toggle( 'list-group-item-success' );



    /**
      * defArray [{
        id: 0,
        name: inputValue,
        done: true
      }]
      **/

    for ( const listItem of defArray ) { 

      if ( listItem.id === obj.id ) {
        listItem.done = !listItem.done
      }
    }
    saveLocalStorageList( defArray, keyName )

  } );


  deleteButton.addEventListener( 'click', function () {
    if ( confirm( 'Вы уверены?' ) ) {
      item.remove(); // DOM method

      // for ( let i = 0; i < defArray.length; i++ ) {
      //   if ( defArray[i].id == obj.id ) {
      //     defArray.splice( i, 1 )
      //   }
      // }

    }

    const filteredArray = defArray.filter( ( todo ) => todo.id !== obj.id )
    saveLocalStorageList( filteredArray, keyName )

  } );

  buttonGroup.append( doneButton );
  buttonGroup.append( deleteButton );
  item.append( buttonGroup );

  return {
    item,
    doneButton,
    deleteButton,
  }
}


export default TodoItem