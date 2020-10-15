import React from 'react'
import {Link} from 'react-router-dom'
import {boardcreate,boarddelete,boardread,boardupdate} from '.'

const boardmenu = () =><>
<nav>
    <ol>
        <li><Link to='/board/create'>boardcreate</Link></li> 
        <li><Link to='/board/read'>boardread</Link></li> 
        <li><Link to='/board/update'>boardupdate</Link></li> 
        <li><Link to='/board/delete'>boarddelete</Link></li> 
    </ol>
</nav>
</>

export default boardmenu 