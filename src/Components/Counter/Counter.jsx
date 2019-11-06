import React ,{Component} from 'react'
import propTypes from 'prop-types'
import './Counter.css'
class Counter extends Component{
    constructor()
    {
        super()
        this.state={
        counter:0
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.reset=this.reset.bind(this)
    }
    render() {
        return (
          <div className="App">
            <CounterButton by={1} incrementmethod={this.increment} decrementmethod={this.decrement}/>
            <CounterButton by={5} incrementmethod={this.increment} decrementmethod={this.decrement}/>
            <CounterButton by={10} incrementmethod={this.increment}  decrementmethod={this.decrement}/>
            
            <span className='count'>{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
            {/* <LearningComponents/> */}
          </div>
        )
        }
        reset(){
            this.setState({
                counter:0
            })
        }
        increment(by){
            this.setState({
                counter: this.state.counter+by
            })
        }
        decrement(by){
            this.setState({
                counter: this.state.counter-by
            })
        }
}
class  CounterButton extends Component{
    //Define the initial state in a constructor
    //state => counter 0
    constructor(){
        super() //Error 1
        this.state ={
            counter : 0
        }
        // For increment method make enable bind increment method within constructor
        //when we use arrow function then no need to bind method explicitly
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        
    }

    render(){
    return(
        <div className='Counter'>
            <button onClick={this.increment}>+{this.props.by}</button> 
            <button onClick={this.decrement}>-{this.props.by}</button>
             {/* <span className='count'>{this.state.counter}</span>  */}
        </div>
    )

}
// Error2 without (this) call increment function 
//Error3 without {} write this.state.counter does'nt give value
         
//  increment = () =>{ 
    increment() {//Update state counter ++

    // this.state.counter++; {Don't change or update state of component directly use setState()}
    this.setState({
        counter: this.state.counter+this.props.by
    })
    this.props.incrementmethod(this.props.by)
 }
 decrement(){
     this.setState({
         counter: this.state.counter-this.props.by
     })
     this.props.decrementmethod(this.props.by)
 }

 
}
CounterButton.defaultProps={
    by : 1
}
CounterButton.propTypes={
    by: propTypes.number
}
export default Counter