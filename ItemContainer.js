import React from 'react';
import Item from './components/Item'
import Filter from './components/Filter'
import {Link} from 'react-router-dom'

class ItemContainer extends React.Component {

  state = {
    products: [],
    filteredItems: [],
    sort: "",
    size: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredItems: data
    }))
  }

  handleChangeSort = (e) => {
    (console.log("handleChangeSort"))
    this.setState({sort: e.target.value})
    this.listProducts()
  }

  listItems = () => {
    (console.log("listProducts", this.state.sort))
    this.setState(state => {
      console.log("setState", state)
      if (state.sort !== ""){
        state.products.sort((a,b) => (state.sort === "lowest") ? 
        (a.price > b.price ? 1 : -1)
        : (a.price < b.price ? 1 : -1) )
      } else {
        state.products.sort((a,b) => (a.id > b.id ? 1 : -1))
      }
      if (state.size !== ""){
        return{ filteredItems: state.products.filter(a => 
          a.availableSizes.indexOf(state.size.toUpperCase())>=0
          )}
      }
      return {filteredItems: state.products}
    })
  }

  handleChangeSize = (e) => {
    this.setState({size: e.target.value})
    this.listItems()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-9">
            <Link to="/">Return Home</Link>
              <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize} handleChangeSort={this.handleChangeSort} count={this.state.filteredItems.length} />
              <hr />
              <Item products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
          </div>
          <div className="col-md-4">

          </div>
        </div>
      </div>
    );
  }
}

export default ProductsContainer;