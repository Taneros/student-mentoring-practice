function AppTitle ( title ) { // создаем и возвращаем заголовок приложения
  const appTitle = document.createElement( 'h2' ); // in memory
  appTitle.innerText = title;

  // { 
  // type: 'h2'
  // innerText: title
  // ...
  // style: {
      //
    //  }
// }
  //
  return appTitle
}

export default AppTitle

//TODO 
/**
  *  <h2> `<div></div>` </h2>
  * 
  * 
  **/