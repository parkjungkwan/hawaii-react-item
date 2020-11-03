import React, {useState} from 'react'
import {User} from '../../templates'
import { useDispatch, useSelector } from "react-redux";
import { userActions } from '../../modules/user.action'

export default function UserDetail() {
    const dispatch = useDispatch()
    const user = useSelector(state => (state.userReducer.user))
    
    return (<User>
        <h1>UserDetail</h1>
        <form>
        <table className='tab_layer'>
            
                <tr>
                    <td>ID</td>
                    <td>{user.userId}</td>
                </tr>
                <tr>
                    <td>PASSWORD</td>
                    <td>{user.password}</td>
                </tr>
                <tr>
                    <td>NAME</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>PCLASS</td>
                    <td>{user.pclass}</td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>BIRTH YEAR</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>EMBARKED</td>
                    <td>{user.embarked}</td>
                </tr>
                <tr>
                    <td>RANK</td>
                    <td>{user.rank}</td>
                </tr>
                <tr>
                    <td colspan={2}><button onClick={dispatch(userActions.goToDest('/modifying-user-info'))}>
                        Go Update</button>
                    <button>Cancel</button></td>
                </tr>
        </table></form>
    </User>)
}
