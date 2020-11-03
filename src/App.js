import React, { useState } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Nav } from './components'
import { AirportContainer, BmiContainer, CabbageContainer , ChatbotContainer,
         CounterContainer, MovieReviewConainer } from './containers/item'
import { UserRegister, UserLogin, UserDetail, UserModify, UserWithdrawal, UserList } from './containers/user'
import { ArticleList, EditArticle, ReadArticle, RemoveArticle, ArticleWriteForm } from './containers/article'
import { Home, User, Article, Item} from './templates'



export default function App(){
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>
      
                <Nav isAuth = {loggedIn}/>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Redirect from = {'/home'} to={'/'}/> 
                    <Route path='/user' component={User}></Route>
                    <Route path='/signup-form' component={ UserRegister }/>
                    <Route path='/signin-form' component={ UserLogin }/>
                    <Route path='/user-detail' component={ UserDetail }/>
                    <Route path='/modifying-user-info' component={ UserModify }/>
                    <Route path='/membership-withdrawal' component={ UserWithdrawal }/>
                    <Route path='/userlist' component={ UserList }/>
                    
                    <Route path='/article' component={ Article }></Route>
                    <Route path='/article-list' component={ ArticleList }></Route>
                    <Route path='/edit-article' component={ EditArticle }></Route>
                    <Route path='/read-article' component={ ReadArticle }></Route>
                    <Route path='/remove-article' component={ RemoveArticle }></Route>
                    <Route path='/article-write-form' component={ ArticleWriteForm }></Route>

                    <Route path='/item' component={Item}></Route>
                    <Route path='/search-airport' component={ AirportContainer }></Route>
                    <Route path='/find-bmi' component={ BmiContainer }></Route>
                    <Route path='/cabbage-price-predict' component={ CabbageContainer }></Route>
                    <Route path='/chabtbot-service' component={ ChatbotContainer }></Route>
                    <Route path='/counter' component={ CounterContainer }></Route>
                    </Switch>
       
</>)}
