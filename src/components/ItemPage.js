import React from 'react'
import {Link} from 'react-router-dom'

export default class ItemPage extends React.Component {

    useState = {
        product: []
    }

    componentDidMount = () => {
        fetch("http://localhost:8000/products" + `/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                item: data
            })
        })
    }

    render() {
        console.log(this.state, this.state.item.title)
        const { title, description, id, price, sku } = this.state.product
        return(
            <div className="container">
                <div className="back-to-products">
                    <Link to="/products">Back to Items</Link>
                </div>
                <h1>{title}</h1>
                <div className="details">
                    <div className="details-image">
                        <img src={`/items/${sku}_2.jpg`} alt={title}></img>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                Price: <b>${price}</b>
                            </li>
                            <li>
                                Description:
                                <div>{description}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
