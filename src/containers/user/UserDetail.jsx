import React, {useState} from 'react'
import {User} from '../../templates'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { getById, userDetailAction } from '../../modules/user.action'
export default function UserDetail() {
    const dispatch = useDispatch()
    // const {user, isLoggedIn}  = useSelector(state => ({
    //     user: state.userReducer.user,
    //     isLoggedIn: state.userReducer.isLoggedIn
    // }), [])
    const number = useSelector(state => (state.counterReducer.number))
    console.log(`[Login Check] ${number}`)
    //console.log(`[Login User] ${JSON.stringify(user)}`)
    //console.log(`[Login Check] ${isLoggedIn}`)
    const detail = e =>{
            e.preventDefault()
            dispatch(getById())
    }
    /*
    useEffect(() => {
        dispatch({
          type: LOG_IN,
          data: {
            nickname: "darren",
          },
        });
      }, []);*/

    return (<User>
        <h1>UserDetail</h1>
        <form>
        <table className='tab_layer'>
            
                <tr>
                    <td>ID</td>
                    <td></td>
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
                    {/* <td colspan={2}><button onClick={() => dispatch(goToHome())}>Update Info</button> */}
                    <td colspan={2}><button onClick={detail}>Update Info</button>
                    <button>취소</button></td>
                </tr>
        </table></form>
    </User>)
}
