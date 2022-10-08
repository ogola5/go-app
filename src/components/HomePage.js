import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/products">Click Here To Shop</Link>
        </div>
    )
}
export default HomePage