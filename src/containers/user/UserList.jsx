import React , { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { User } from '../../templates'
import { context as c } from '../../context'
import { userActions } from '../../modules/user.action'
export default function UserList(){
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    const history = useHistory()
    
    useEffect(() => {fetchAllUsers()},[])
    
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
    
    return (<User>
  
        <table>
            <h1>User List</h1>
            Search ID : <input type="text" id='search'/> 
            <button onClick={dispatchEvent(userActions.getByOption)}>Search</button>
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
                <td userId={i.user_id} onClick={userActions.getById}>{i.name}</td>
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
