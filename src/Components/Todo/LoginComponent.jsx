import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={ 
            Username:'pikuyadav',
            Password:"",
            hasloginfailed:false,
            hasloginsuccess:false
        }
        // this.handleUsernameChange=this.handleChange.bind(this)
        // this.handlePasswordChange=this.handleChange.bind(this)
        this.FieldChange=this.FieldChange.bind(this)
        this.loginclicked=this.loginclicked.bind(this)
        // this.showvalidcredential=this.showvalidcredential.bind(this)
        // this.Showinvalidcredential=this.Showinvalidcredential.bind(this)
    }
    FieldChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value 
            })
    }
    loginclicked(){
        if(this.state.Username==='pikuyadav' && this.state.Password==='piku'){
            AuthenticationService.registerSuccessfulLogin(this.state.Username,this.state.Password)
          this.props.history.push(`/welcome/${this.state.Username}`)
        // this.setState({
        //     hasloginfailed:false,
        //     hasloginsuccess:true
        }
        else{
            this.setState({
            hasloginsuccess:false,
            hasloginfailed:true
        })
        }
    }
    
    // handleUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState({Username:event.target.value})
    // }
    // handlePasswordChange(event){
    //     this.setState({Password:event.target.value})
    // }
    render() {
       return(
           <div>
               <h1>Login</h1>
               <div className="container">
               {/* <Showinvalidcredential hasloginfailed={this.state.hasloginfailed}/>
               <Showvalidcredential hasloginsuccess={this.state.hasloginsuccess}/> */}
               {this.state.hasloginfailed && <div className="alert alert-warning">Invalid Credential.</div>}
               {this.state.hasloginsuccess && <div>Login Successfully.</div> }
                User Name:  <input type="text" name="UserName" value={this.state.Username} onChange={this.FieldChange}/>
                Password:  <input type="password" name="Password" value={this.state.Password} onChange={this.FieldChange}/>
               <button className="btn btn-success" onClick={this.loginclicked}>Login</button>
               </div>
           </div>
       )
   }
  
}
export default LoginComponent
// function Showinvalidcredential(props) {
//     if(props.hasloginfailed)
//     return <div>Invalid Credential.</div>
//     else{
//         return null
//     }
// }
// function Showvalidcredential(props) {
//     if(props.hasloginsuccess)
//     return <div>Login Successfully.</div>
//     else
//     return null
    
// }