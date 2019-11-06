import React ,{Component} from 'react'
import Counter from './Components/Counter/Counter'
import './App.css'
 import './bootstrap.css'
import CounterButton from './Components/Counter/Counter';
import TodoApp from './Components/Todo/TodoApp'
class App extends Component{
  render() {
  return (
    <div className="App">
      <TodoApp/>
     {/* <Counter/> */}
      {/* <LearningComponents/> */}
    </div>
  )
  }
}

 
 export default App