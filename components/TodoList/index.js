//создаем и возвращаем список элементов
function TodoList () {
  let list = document.createElement( 'ul' );
  list.classList.add( 'list-group' );
  return list;
}

export default TodoList