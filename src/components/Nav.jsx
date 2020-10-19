import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => (<>
<nav style={{width: '500px', margin: '0 auto'}}>
    <ol>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/user'>User</Link></li>
        <li><Link to='/item'>Item</Link></li>
        <li><Link to='/article'>Board</Link></li>
    </ol>
</nav>

</>)

export default Nav
