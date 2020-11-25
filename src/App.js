//feature 1
import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Link} from "react-router-dom"
import store from './store'
import HomeScreen from "./screens/HomeScreen"
import AdminScreen from "./screens/AdminScreen"

class App extends React.Component {
  render(){
    console.log("App.js render")
 //   console.log(store)
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen}/>
              <Route path="/" component={HomeScreen} exact/>
            </main>
            <footer>All rights is reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
