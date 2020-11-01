import React,{useEffect, useState} from 'react'
import './table.style.css'
import {ItemChatBot} from "../containers/item"
import {context as c} from '../context'
import axios from 'axios'
export default function Home(props){ 
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const test = () => {
        axios.get(`${c.url}/api`)
            .then(res => {
                alert(`Connection Success !!`)
            }
                
            ).catch(
                e => alert(`Failure`)
            )
    }
    useEffect(()=>{
        const name = sessionStorage.getItem('sessionUser')
        setName(name)
        let title = name !== null ? `${name} is connecting.. ` : `Home`
        setTitle(title)
    })
    return(<>
           <table className='tab_layer'>
               <tr><td><h1>{title}</h1></td></tr>
                <tr><td><button onClick={test}>Connection Test</button></td></tr>
            </table>   
            <ItemChatBot/>    
            </>)
}
