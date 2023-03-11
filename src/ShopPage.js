import React from 'react';
import { Link } from 'react-router-dom'

function shopContents() {
    return (
        <div>
            <div className='header'>
                <h3>Catalog</h3>
                <Link to='/' className='BackHome'><h3>Home</h3></Link>
                <h3>Cart</h3>
            </div>
        </div>
    )
}

export default shopContents;