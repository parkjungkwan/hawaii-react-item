import React, {useState} from 'react'
import {User} from '../../templates'
import { useEffect } from 'react'
export default function UserDetail() {
   const detail = () =>{}
    return (<User>
        <h1>UserDetail</h1>
        <form>
        <table className='tab_layer'>
            
                <tr>
                    <td>ID</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>PASSWORD</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>NAME</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>PCLASS</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>BIRTH YEAR</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>EMBARKED</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>RANK</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td colspan={2}><button onClick={detail}>Update Info</button>
                    <button>취소</button></td>
                </tr>
        </table></form>
    </User>)
}
