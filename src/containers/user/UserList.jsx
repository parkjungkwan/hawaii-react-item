import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {User} from '../../templates'
import {Link} from 'react-router-dom'

export default function UserList(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/api/users`)
        .then(res=>{
            alert(`List Success`)
            setData(res.data)
        })
        .catch(e=>{
            alert(`List Failure`)
            throw(e)
        })

    },[])

    const search = e => {
        alert(`Key Value: ${document.getElementById('search').value}`)
        axios.get(`http://localhost:8080/api/user/${document.getElementById('search').value}`)
        .then(res => { 
            alert(`Success`)
        })
        .catch( e => { alert(`Search ...`) })
    }
    
    return (<User>
  
        <table>
            <h1>User List</h1>
            Search ID : <input type="text" id='search'/> 
            <button onClick={search}>Search</button>
            <tr>
                <th>userid</th>
                <th>name</th>
                <th>pclass</th>
                <th>gender</th>
                <th>age_group</th>
                <th>embarked</th>
                <th>rank</th>
            </tr>
            {data.map((i, index)=>(
                <tr key={index}>
                <td><Link to=''>{i.userid}</Link></td>
                <td>{i.name}</td>
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
