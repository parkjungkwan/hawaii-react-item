import React from 'react'
import './table.style.css'
import {ItemChatBot} from "../containers/item"
import {context as c} from '../context'
import axios from 'axios'
export default function Home(props){ 
    const test = () => {
        axios.get(`${c.url}/api`)
            .then(res => {
                alert(`Connection Success !!`)
            }
                
            ).catch(
                e => alert(`Failure`)
            )
    }
    return(<>
           <table className='tab_layer'><tr><td><h1>Home</h1></td></tr>
            <tr><td><button onClick={test}>Connection Test</button></td></tr></table>   
            <ItemChatBot/>    
            </>)
}
