import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Store from './components/store/Store';
import Cart from './components/cart/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      cartItemsNumber: 0
    }

    
    this.addItemToCard = this.addItemToCard.bind(this);
    this.itemExists = this.itemExists.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.removeAllOfItemFromCart = this.removeAllOfItemFromCart.bind(this);
  }

  addItemToCard(item, quantity) {
    const number = this.state.cartItemsNumber + 1;
    // const cart = this.state.cart.concat(item);

    let cart;
    if (this.itemExists(item)) {
      cart = this.state.cart.map(cartItem => {
        if (cartItem.title === item.title) {
          cartItem.quantity += 1;
          return cartItem;
        }
        return cartItem
      });
    } else {
      item.quantity = quantity;
      cart = this.state.cart.concat(item);
    }
    
    this.setState({ 
      cart: cart,
      cartItemsNumber: number 
    })
  }

  removeItemFromCart(item) {
    const number = this.state.cartItemsNumber - 1;
    let cart;
    let itemToRemove;

    cart = this.state.cart.map(cartItem => {
      if (cartItem.title === item.title) {
        if (cartItem.quantity === 1) {
          itemToRemove = this.state.cart.indexOf(cartItem);
        }
        cartItem.quantity -= 1;
        return cartItem;
      }
      return cartItem
    });

    if(typeof itemToRemove == 'number'){
      cart.splice(itemToRemove, 1);
    }

    this.setState({ 
      cart: cart,
      cartItemsNumber: number 
    })
  }

  removeAllOfItemFromCart(item, quantity) {
    const number = this.state.cartItemsNumber - quantity;
    let cart;
    let itemToRemove;

    cart = this.state.cart.map(cartItem => {
      if (cartItem.title === item.title) {
        itemToRemove = this.state.cart.indexOf(cartItem);
        return cartItem
      }
      return cartItem
    });

    if(typeof itemToRemove == 'number'){
      cart.splice(itemToRemove, 1);
    }

    this.setState({ 
      cart: cart,
      cartItemsNumber: number 
    })
  }

  clearCart() {
    this.setState({ 
      cart: [],
      cartItemsNumber: 0 
    })
  }

  itemExists(item) {
    return this.state.cart.some(cartItem => cartItem.title === item.title);
  }
  
  render() {
    console.log(this.state);
    return (
    <Router>
      <div className="App">
        <Navbar cartItemsNumber={this.state.cartItemsNumber}></Navbar>

        <Switch>
          <Route path="/cart">
            <Cart
              items={this.state.cart}
              totalItems={this.state.cartItemsNumber}
              clearCart={this.clearCart}
              addItem={this.addItemToCard}
              removeItem={this.removeItemFromCart}
              removeAllOfItem={this.removeAllOfItemFromCart}
            ></Cart>
          </Route>
          <Route path="/">
            <Store addItem={this.addItemToCard}></Store>
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
