import React, { useState } from 'react'
import { Article } from '../../templates'
import axios from 'axios'
// import { useForm, UseForm } from 'react-hook-form'

export default function ArticleWriteForm(){
   

    const [title, setTitle] = useState('')
    const [userId, setUserId] = useState('')
    const [content, setContent] = useState('')
    const [itemId, setItemId] = useState('')
    
    const write = () => {
        alert(`Title: ${title}, UserId: ${userId}, Content: ${content}, ItemId: ${itemId}`)
        axios.post(`http://localhost:8080/api/article`,{'title':title,
        'user_id': userId, 'content': content, 'item_id': itemId})
        .then(res => {
            alert(`WRITING SUCCESS`)
        })
        .catch(
            e => {
                alert(`Writing ${e}`)
            }
        )

    }
    const options = [
        {
            label: "Select One",
            value: "0",
          },
        {
          label: "item",
          value: "1",
        },
        {
          label: "news",
          value: "2",
        },
      ];
    
    return ( <Article>
                <table>
                    <tr><td>
                <div class="container" role="main">
                    <h2>Article Write Form</h2>
                    <form>
                        <div class="mb-3">
                            <label htmlFor="title">Title</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                name="title" id="title" 
                                placeholder="Input Title" 
                                onChange={e=>setTitle(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="userid">Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                name="userid" id="userid" 
                                placeholder="Input Writer's Name" 
                                onChange={e=>setUserId(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="content">Content</label>
                            <textarea 
                                class="form-control" rows="5" 
                                name="content" id="content" 
                                placeholder="Please Leave a Review." 
                                onChange={e=>setContent(e.target.value)}></textarea>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="itemid">Item</label>
                            <select value={itemId} 
                                    onChange={e=>setItemId(e.target.value)}>
                                {options.map(o=>(
                                    <option value={o.value}>{o.label}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                    <div >
                        <button type="button" class="btn btn-sm btn-primary" id="btnSave" onClick={write}>Save</button>
                        <button type="button" class="btn btn-sm btn-primary" id="btnList">Go Article List</button>
                    </div>
                </div></td></tr>
                </table>
	</Article>)
}