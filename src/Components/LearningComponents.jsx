import React ,{Component} from 'react'
import FirstComponent from './Components/Learning-Example/FirstComponent'
import SecondComponent from './Components/Learning-Example/SecondComponent'
import ThirdComponent from './Components/Learning-Example/ThirdComponent'
class LearningComponents extends Component{
    render() {
      return (
        <div className="LearningComponents">
          HELLO WORLD
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
        </div>
      )
      } 
  }
  export default LearningComponents