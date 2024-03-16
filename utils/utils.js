export function getNewId ( arr ) {
  let max = 0;
  for ( const item of arr ) {
    if ( item.id > max ) {
      max = item.id
    }

  }
  return max + 1;
}

export function saveLocalStorageList ( arr, keyName ) {
  localStorage.setItem( keyName, JSON.stringify( arr ) )
}

export function getLocalStorageItem ( listName ) {
  return localStorage.getItem( listName )
}

{/* 
<li id="0">name <done, delete?</li> 
<li id="1">name <done, delete?</li> 
<li id="2">name <done, delete?</li> 
<li id="3">name <done, delete?</li> 
<li id="">name <done, delete?</li> 

*/}
export function getNewTodoItem ( defArray, input ) {
  return {
    id: getNewId( defArray ),
    name: input.value,
    done: false
  }
}
