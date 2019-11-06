import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
class TodoComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
        todos :
        [{Id :1,Description:'Learn React',done:false,targetDate:new Date()},
        {Id :1,Description:'Learn React',done:false,targetDate:new Date()},
        {Id :1,Description:'Learn React',done:false,targetDate:new Date()}
        ]
            }}
    render(){
        return(
            <div>
               <h1>Todo List</h1> 
               <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr>
                                    <td>{todo.Description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                            </tr>)
                            
                            }
                        </tbody>
                    </table>
               </div>
            </div>        
            )
    }
}
export default TodoComponent