import React, { useState } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Nav } from './components'
import { ItemDetail, ItemList, ModifyItem, RegisterItem, RemoveItem } from './containers/item'
import { UserRegister, UserLogin, UserDetail, UserModify, UserWithdrawal, UserList } from './containers/user'
import { ArticleList, EditArticle, ReadArticle, RemoveArticle, ArticleWriteForm } from './containers/article'
import rootReducer from './modules'
import { Home, User, Article, Item} from './templates'
import { Provider } from'react-redux'
import { Cabbage } from './containers/item'
import ReduxThunk from 'redux-thunk'
import history from './history';
export default function App(){
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>
      
                <Nav isAuth = {loggedIn}/>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Redirect from = {'/home'} to={'/'}/> 
                    <Route path='/user' component={User}></Route>
                    <Route path='/signup-form' component={UserRegister}/>
                    <Route path='/signin-form' component={UserLogin}/>
                    <Route path='/user-detail' component={UserDetail}/>
                    <Route path='/modifying-user-info' component={UserModify}/>
                    <Route path='/membership-withdrawal' component={UserWithdrawal}/>
                    <Route path='/userlist' component={UserList}/>
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
                    <Route path='/article-write-form' component={ArticleWriteForm}></Route>
                    <Route path='/cabbage-price-predict' component={Cabbage}></Route>
                    </Switch>
       
</>)}
