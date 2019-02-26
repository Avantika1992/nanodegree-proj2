import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'

class UserQuestion extends Component {
  state={optionOneText:'',optionTwoText:'',submittedQue:false}

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
    this.setState({optionOneText:'',optionTwoText:''})
    this.setState({submittedQue:true})
  }

  render() {
    if(this.state.submittedQue){
    return <Redirect to={'/'} />
  }
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
        <button type='submit' disabled={!this.state.optionOneText || !this.state.optionTwoText}>Submit</button>
        </form>
      </div>
    )
  }
}


export default connect()(UserQuestion)
