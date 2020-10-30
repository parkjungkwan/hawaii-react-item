import React , {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import {User} from '../../templates'
import {context as c} from '../../context'
export default function UserList(){
    const [data, setData] = useState([])
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
            setData(res.data)
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
            alert(`Search ...1`) 
            const id = e.target.getAttribute('userId')
            const req = {
                method: c.get,
                url: `${c.url}/api/user/${id}`,
                auth: c.auth
            }
            alert(`Search ..2.`) 
            const res = await axios(req)   
            alert(`${res.data}`) 
        } catch (error) {
            const res = error.response
            console.log(`Error ${res}`) 
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
            {data.map((i, index)=>(
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
