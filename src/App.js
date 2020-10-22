import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Nav} from './components'
import {ItemDetail, ItemList, ModifyItem, RegisterItem, RemoveItem } from './container/item'
import {UserRegister, UserLogin, UserDetail, UserModify, UserWithdrawal} from './container/user'
import {ArticleList, EditArticle, ReadArticle, RemoveArticle, WriteArticle} from './container/article'
import {Home, User, Article, Item} from './templates'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from'react-redux'
import {itemReducer } from './container/item/ItemList'

import ReduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    itemReducer
})

const App = () => (<>

    <Router>
        <Nav/>
        <Switch>
            <Provider store = {createStore(rootReducer, applyMiddleware(ReduxThunk))}>
                <Route path='/home' component={Home}></Route>
                <Redirect exact from = {'/'} to={'/home'}/>
                <Route path='/user' component={User}></Route>
                <Route path='/signup-form' component={UserRegister}/>
                <Route path='/signin-form' component={UserLogin}/>
                <Route path='/mypage' component={UserDetail}/>
                <Route path='/modifying-user-info' component={UserModify}/>
                <Route path='/membership-withdrawal' component={UserWithdrawal}/>
                <Route path='/item' component={Item}></Route>
                <Route path='/item-list' component={ItemList}/>
                <Route path='/item-detail' component={ItemDetail}/>
                <Route path='/modify-item' component={ModifyItem}/>
                <Route path='/register-item' component={RegisterItem}/>
                <Route path='/remove-item' component={RemoveItem}/>
                <Route path='/article' component={Article}></Route>
                <Route path='/article-list' component={ArticleList}></Route>
                <Route path='/edit-article' component={EditArticle}></Route>
                <Route path='/read-article' component={ReadArticle}></Route>
                <Route path='/remove-article' component={RemoveArticle}></Route>
                <Route path='/write-article' component={WriteArticle}></Route>
            </Provider>,    
        </Switch>
    </Router>
</>)

export default App