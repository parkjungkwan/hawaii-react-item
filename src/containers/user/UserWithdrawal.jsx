import React, { useState } from 'react'
import { User } from '../../templates'
import { userActions } from '../../modules/user.action'

const UserWithdrawal = () => {
    
    return (<User>
        <h1>UserWithdrawal</h1>
        <table  className='tab_layer'>
            <tr>
                <td> Enter PW : </td>
                <td> <input type="text" /> </td>
            </tr>
            <tr>
                <td colSpan={2}><button onClick={e => userActions.remove()}>Withdrawal</button></td>
            </tr>
        </table>
    </User>)
}

export default UserWithdrawal