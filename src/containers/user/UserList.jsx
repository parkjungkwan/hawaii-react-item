import React , { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { User } from '../../templates'
import { context as c } from '../../context'
export default function UserList(){
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    const history = useHistory()
    const bulk = useCallback(async e =>{
        e.preventDefault()
        try {
            const req = {
                method: c.get,
                url: `${c.url}/api/users`
            }
            const res = await axios(req)
        } catch (error) {
            
        }
    }, [])
    const count = useCallback(async e =>{
        e.preventDefault()
        try {
            const req = {
                method: c.get,
                url: `${c.url}/api/users`,
            }
            const res = await axios(req)
        } catch (error) {
            
        }
    }, [])
    const save = useCallback(async e => {
        e.preventDefault()
        
        try {
            const req = {
                method: c.post,
                url: `${c.url}/api/user`,
                data: {},
                auth: c.auth
            }
            const res = await axios(req)
        } catch (error) {
            
        }
    }, []) 

    const update = useCallback(async e => {
        e.preventDefault()
        try {
            const req = {
                method: c.put,
                url: `${c.url}/api/user`,
                data: {},
                auth: c.auth
            }
            const res = await axios(req)
        } catch (error) {
            
        }
    }, [])

    const remove = useCallback(async e => {
        e.preventDefault()
        try {
            const req = {
                method: c.delete,
                url: `${c.url}/api/user`,
                data: {},
                auth: c.auth
            }
            const res = await axios(req)   
        } catch (error) {
            
        }
    }, [])

    const fetchAllUsers = useCallback(async () => {
        try{
            const req = {
                method: c.get, 
                url: `${c.url}/api/users`
            }
            const res = await axios(req)   
            setUsers(res.data)
        }catch(error){
            alert(`fetchAllUsers failure`)
            throw(error)
        }
    },[]) 
    useEffect(() => {fetchAllUsers()},[])
    
    const fetchSomeUsers = useCallback(async e=>{
        e.preventDefault()
        try {
            const req = {
                method: c.get,
                url: `${c.url}/api/users`,
                data: {params: e.target.getAttribute('userId')},
                auth: c.auth
            }
            const res = await axios(req)   
        } catch (error) {
            alert(`fetchSomeUsers failure`)
            throw(error)
        }
    },[])
    const fetchOneUser = useCallback(async e => {
        e.preventDefault()
        try {
            
            const userId = e.target.getAttribute('userId')
            console.log(`Search Id is ${userId}`) 
            const req = {
                method: c.get,
                url: `${c.url}/api/user/${userId}`,
                auth: c.auth
            }
            const res = await axios(req)   
            const data = JSON.parse(res.data)
            setUser(data)
            console.log(`${data.name}`) 
            history.push("/user-detail");
        } catch (error) {
            console.log(`Error ${error}`) 
        }
    },[])
    
    
    return (<User>
  
        <table>
            <h1>User List</h1>
            Search ID : <input type="text" id='search'/> 
            <button onClick={fetchSomeUsers}>Search</button>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Pclass</th>
                <th>Gender</th>
                <th>Age Group</th>
                <th>Embarked</th>
                <th>Rank</th>
            </tr>
            {users.map((i, index)=>(
                <tr key={index}>
                <td>{i.user_id}</td>
                <td userId={i.user_id} onClick={fetchOneUser}>{i.name}</td>
                <td>{i.pclass}</td>
                <td>{i.gender}</td>
                <td>{i.age_group}</td>
                <td>{i.embarked}</td>
                <td>{i.rank}</td>
            </tr>
            ))}
            
        </table>

    </User>)
}
