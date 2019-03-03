import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'
import {saveQuestionAnswer, getInitialData} from '../utils/api'
import QuestionPage from './QuestionPage'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'


class Question extends Component {
  state={value:''}
  handleRadioButton(value) {
    this.setState({
      value: value
    });
  }
  handleSubmit=(e)=>{

    e.preventDefault();
    console.log('submitted,',this.state.value)
    saveQuestionAnswer({authedUser: this.props.authedUser,
                       qid: this.props.question.id,
                       answer:this.state.value})
                       .then((res) => (
                        getInitialData().then((res)=>{
                          this.props.dispatch(receiveUsers(res.users))
                          this.props.dispatch(receiveQuestions(res.questions))
                        })
                       ))
  }
  render() {
    const numUsers=Object.keys(this.props.users).length
    const {question}=this.props
    const {authedUser}=this.props
    const{
        name,avatar,timestamp,optionOne
        ,optionTwo,optionOneVotes,
        optionOneText,optionTwoVotes
        ,optionTwoText,id,
      }=question
      const oponeVotes=optionOneVotes.length
      const optwoVotes=optionTwoVotes.length
    return (

      <div className='question'>
      {Object.values(optionOneVotes).indexOf(authedUser) > -1?<h4>You selected: {optionOneText}</h4>:null}
      {Object.values(optionTwoVotes).indexOf(authedUser) > -1?<h4>You selected: {optionTwoText}</h4>:null}

         <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
          />
          &emsp;
        <div className='verticalLine'>
          &emsp;<b>{name} asks:</b>
          <br/>
          <div className='horizontalLine'>
          &emsp;Would You Rather
          <br/>
          <form onSubmit={this.handleSubmit}>
          <input type="radio" name='ip'
    onChange={() => this.handleRadioButton('optionOne')}/>{optionOneText}
          &emsp;-votes:{optionOneVotes}
          &emsp;{optionOneVotes.length} out of {numUsers} votes:{(oponeVotes*100)/numUsers}%
          <br/>
          <input type="radio" name='ip'
    onChange={() => this.handleRadioButton('optionTwo')}/>{optionTwoText}
          &emsp;-votes:{optionTwoVotes}
          &emsp;{optionTwoVotes.length} out of {numUsers} votes:{(optwoVotes*100)/numUsers}%
          <br/>
          <br/>
          {'Value Chosen:'}{this.state.value}
          <br/>
          <br/>
          <input type='submit' name="submit" disabled={!this.state.value||
            Object.values(optionOneVotes).indexOf(authedUser) > -1||
            Object.values(optionTwoVotes).indexOf(authedUser) > -1
          }
          />
          </form>
          </div>
        </div>
       </div>

    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id];

  return {
    authedUser,
    users,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  };
}

export default connect(mapStateToProps)(Question)
