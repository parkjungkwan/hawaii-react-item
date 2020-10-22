import React from 'react'
import './table.style.css'
import axios from 'axios'
import {ItemChatBot} from "../container/item"
const Home = ({children}) => {
    
    const test = () => {
        axios.get(`http://localhost:8080/api`)
            .then(res => {
                alert(`Connection Success !!`)
            }
                
            ).catch(
                e => alert(`Failure`)
            )
    }
    
    return(<>
        <table className='tab_layer'>
        <tr><td><h1>Home</h1></td></tr>
        <tr><td><button onClick={test}>Connection Test</button></td></tr>

        </table>
        {children}
        <ItemChatBot/>
</>)}

export default Home
