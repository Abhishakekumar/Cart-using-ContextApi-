import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import '../css/App.css'
import Navbar from './Navbar'
import Home from './Home';
import Cart from './Cart';
import {CartProvider} from '../CartContext';

function App() {
  return (
    <Router>
        <Navbar/>
        <CartProvider>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/cart" component={Cart}></Route>
          </Switch>
        </CartProvider>
    </Router>
  );
}

export default App;
