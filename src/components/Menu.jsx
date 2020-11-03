import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => (<nav>
        <ol>
            <li><Link to='/user-detail'>User Detail</Link></li>
            <li><Link to='/modifying-user-info'>Modifying User Information</Link></li>
            <li><Link to='/membership-withdrawal'>Membership Withdrawal</Link></li>
            <li><Link to='/userlist'>User List</Link></li>
            <li><Link to='/item'>[ Item ]</Link></li>
        </ol>
    </nav>)

export const ArticleMenu = () =>(<nav>
    <ol>
        <li><Link to='/article-write-form'>Writing Article Form</Link></li> 
        <li><Link to='/article-list'>Article List</Link></li> 
        <li><Link to='/edit-article'>Update Article Form</Link></li> 
        <li><Link to='/delete-article'>Delete Article Form</Link></li> 
    </ol>
</nav>)

export const ItemMenu = () => (<nav>
    <ol>
        <li><Link to='/search-airport'>Airport</Link></li>
        <li><Link to='/find-bmi'>Bmi</Link></li>
        <li><Link to='/cabbage-price-predict'>Cabbage</Link></li>
        <li><Link to='/chabtbot-service'>Chatbot</Link></li>
        <li><Link to='/counter'>Counter</Link></li>
    </ol>
</nav>)

export const AuthMenu = () => (<nav>
    <ol>
        <li><Link to='/signup-form'>Siginup Form</Link></li>
        <li><Link to='/signin-form'>Signin Form</Link></li>
    </ol>
</nav>)


