//feature 1
import React from 'react';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';
import Filter from './Components/Filter';
import Products from './Components/Products';
import store from './store'

class App extends React.Component {
  render(){
    console.log("App.js render")
    console.log(store)
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter></Filter>              
              <Products>
              </Products>
            </div>
            <div className="sidebar">
              <Cart/>
            </div>  
          </div>
        </main>  
        <footer>All right is reserved</footer>  
      </div>
      </Provider>
    );
  }
}

export default App;
