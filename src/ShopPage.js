import React from 'react';
import { Link } from 'react-router-dom'

function shopContents() {
    return (
        <div>
            <div className='shop-header'>
                <Link to='/' className='BackHome'>Home</Link>
                <div>hello</div>
            </div>
        </div>
    )
}

export default shopContents;