import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => (<nav>
        <ol>
            <li><Link to='/siginup-form'>Siginup Form</Link></li>
            <li><Link to='/signin-form'>Signin Form</Link></li>
            <li><Link to='/mypage'>My Page</Link></li>
            <li><Link to='/modifying-user-info'>Modifying User Information</Link></li>
        </ol>
    </nav>)



