import React, {Component} from 'react'
import{Link} from 'react-router-dom'
class LogoutComponent extends Component{
    render(){
        return(
            <>
            <h1>You are Logged out!!</h1>
           <div className="container">
                Thank You For Using Our Application!....<Link to="/login">Continue</Link> 
           </div>
           </>
        )
    }
}
export default LogoutComponent