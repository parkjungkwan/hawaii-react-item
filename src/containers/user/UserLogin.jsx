import React , {useCallback, useState} from 'react'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
// import {context as c} from '../../context'
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../modules/user.reducer'
export default function UserLogin() {
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    /*
    async e => {
        e.preventDefault()
        alert(userId)
        try {
            const req = {
                method: c.post,
                url: `${c.url}/api/access`,
                data: {userId, password},
                auth: c.auth
            }
            const res = await axios(req)
            const data = JSON.parse(res.data)
            alert(`Welcome ! ${data.name}'s connection is successful. ! `)
            sessionStorage.setItem("sessionUser", data.name);
            window.location.reload()
            history.push("/home");
        } catch (error) {
            alert("Please check your ID or password.");
            window.location.reload();
        }
    }
    */
    const login = e => { 
        e.preventDefault()
        dispatch(loginAction(userId,password))
    }
    
    const cancel = e => {
        e.preventDefault()

    }
    return (<>
    <h1>Signin Form</h1> <form>
    <table  className='tab_layer'>
       
        <tr>
            <td>ID : </td>
            <td><input type="text" onChange={e => setUserId(`${e.target.value}`)}/></td>
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
    </>)
 }