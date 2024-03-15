function AppTitle ( title ) { // создаем и возвращаем заголовок приложения
  let appTitle = document.createElement( 'h2' );
  appTitle.innerHTML = title;
  return appTitle
}

export default AppTitle