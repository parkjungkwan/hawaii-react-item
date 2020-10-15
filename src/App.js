import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Nav} from './components'
import {UserRegister, UserLogin, UserDetail, UserModify, UserWithdrawal} from './container/user'
import {Home, User, Board, Item} from './templates'
const App = () => (<>
    <Router>
        <Nav/>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Redirect exact from = {'/'} to={'/home'}/>
            <Route path='/user' component={User}></Route>
            <Route path='/signup-form' component={UserRegister}/>
            <Route path='/signin-form' component={UserLogin}/>
            <Route path='/mypage' component={UserDetail}/>
            <Route path='/modifying-user-info' component={UserModify}/>
            <Route path='/membership-withdrawal' component={UserWithdrawal}/>
            <Route path='/item' component={Item}></Route>
            <Route path='/board' component={Board}></Route>
        </Switch>
    </Router>
</>)

export default App