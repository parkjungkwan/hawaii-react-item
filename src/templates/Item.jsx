import React from 'react'
import {ItemMenu as Menu} from '../components'
const Item = ({children}) => (<>
    <h1>Item</h1>
    <Menu/>
    {children}
</>)

export default Item
