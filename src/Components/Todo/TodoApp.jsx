import React, {Component} from 'react'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import TodoComponent from './TodoComponent'
import Errorcomponent from './Errorcomponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import{BrowserRouter as Router,Route, Switch} from 'react-router-dom'

class TodoApp extends Component{
    render(){
        return(
            <div className='todoapp'>
                <Router>
                    <> 
                    <HeaderComponent/>
                    <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todo" component={TodoComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    <Route component={Errorcomponent}/>
                    </Switch>
                    <FooterComponent/>
                    </>

                </Router>
                     {/* <LoginComponent/> */}
            </div>
        )
    }
}
export default TodoApp
