import React, {useState} from 'react'
import axios from 'axios'
import {User} from '../../templates'

const UserLogin = () => {
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    const login = e => {
        e.preventDefault()
        axios.post(`http:localhost:8080/user/login`, {userid, password})
            .then(res => {
                alert('Success !')
            })
            .catch(error => {
                alert('Fail')
            })

    }
    const cancel = e => {
        e.preventDefault()

    }
    return (<User>
    <h1>로그인</h1> <form>
    <table  className='tab_layer'>
       
        <tr>
            <td>ID : </td>
            <td><input type="text" onChange={e => setUserid(`${e.target.value}`)}/></td>
        </tr>
        <tr>
            <td> PW : </td>
            <td> <input type="text" onChange={e => setPassword(`${e.target.value}`)}/> </td>
        </tr>
        <tr>
            <td colspan={2}>
                <input type="button" value="LOGIN" onClick= {login}/>
                <input type="button" value="CANCEL" onClick= {cancel}/>
            </td>
        </tr>
       
    </table> </form>
    </User>)
    }
export default UserLogin