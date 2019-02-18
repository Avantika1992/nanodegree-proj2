import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'

class UserQuestion extends Component {
  state={optionOneText:'',optionTwoText:''}

  handleChangeOne=(e)=>{
    e.preventDefault();
    this.setState({optionOneText:e.target.value})
  }

  handleChangeTwo=(e)=>{
    e.preventDefault();
    this.setState({optionTwoText:e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.dispatch(handleAddQuestion(this.state.optionOneText,this.state.optionTwoText))
    console.log(this.state.optionOneText,this.state.optionTwoText)
    this.setState({optionOneText:'',optionTwoText:''})
  }

  render() {

    return (
      <div className='center'>
        <h2>Create new Question</h2>
        <h4>Would you Rather...</h4>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.optionOneText} type='text' placeholder='Question option One' onChange={this.handleChangeOne}/>
        <br/>
        <b>OR</b>
        <br/>
        <input value={this.state.optionTwoText} type='text' placeholder='Question option Two' onChange={this.handleChangeTwo}/>
        <br/>
        <br/>
        <button type='submit'>Submit</button>
        </form>

      </div>

    )
  }
}


export default connect()(UserQuestion)
