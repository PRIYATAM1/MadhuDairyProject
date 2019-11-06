import React, {Component} from 'react'
import{Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'
class WelcomeComponent extends Component{
   constructor(props)
   {
      super(props)
      this.RetrievWelcomemessage=this.RetrievWelcomemessage.bind(this)
   }
    render(){
       
    return(

       <>
          <h1>Welcome!</h1>
          <div className="container">Welcome In Madhu Dairy {this.props.match.params.name}...For more details click  <Link to="/todo">here</Link></div>
          <div className="container">
               Click here to get customized Welcome message ...here

               <button onClick={this.RetrievWelcomemessage} className="btn btn-success">Click </button>
          </div>
       </>
        
    )}
    RetrievWelcomemessage()
    {
       HelloWorldService.executedHelloWorldService()
       .then( response => console.log(response))
       //.catch()
    }
}
export default WelcomeComponent