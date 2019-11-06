import React, {Component} from 'react'
import {withRouter} from 'react-router'
import AuthenticationService from './AuthenticationService'
import{Link} from 'react-router-dom'
class HeaderComponent extends Component{
    render(){
        // const isUser=AuthenticationService.isUserLoggedIn();
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
         console.log(isUserLoggedIn)
        return(
           <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                   <div><a href="https://www.facebook.com/" className="navbar-brand">Madhu Dairy</a></div>
                   <ul className="navbar-nav">
                       {isUserLoggedIn && <li className="nav-link"><Link to="/welcome/:name">Home</Link></li>}
                       {isUserLoggedIn && <li className="nav-link"><Link to="/todo">Products</Link></li>}
                   </ul>
                   <ul className="navbar-nav navbar-collapse justify-content-end">
                       {!isUserLoggedIn && <li className="nav-link"><Link to="/login">Login</Link></li>}
                       {isUserLoggedIn && <li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                   </ul>
               </nav>
           </header>
        )
    }
}
export default withRouter (HeaderComponent)
