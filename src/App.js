import React from 'react';
import './App.css';

import HomePage from './components/HomePage'
import ProductsContainer from './ProductsContainer'
import ItemPage from './components/ItemPage'

import { BrowserRouter, Route,Routes } from 'react-router-dom';

class App extends React.Component {


  render() {
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart Application</h1>
        <br />
        <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/products" element={<ProductsContainer/>} />
          <Route exact path="/product/:id" render={props => ( <ItemPage { ...props } id={this.state} />  )} />
          </Routes>
        
        
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
