import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'
import Poll from './Poll'
import QuestionPage from './QuestionPage'


class Question extends Component {

  render() {
    const {question}=this.props
    const{
        name,avatar,timestamp,optionOne
        ,optionTwo,optionOneVotes,
        optionOneText,optionTwoVotes
        ,optionTwoText,id,
      }=question
    return (
      <div className='question'>
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
          <input type="radio" name='ip' />{optionOneText}
          &emsp;-votes:{optionOneVotes}
          <br/>
          <input type="radio" name='ip' />{optionTwoText}
          &emsp;-votes:{optionTwoVotes}
          <br/>
          <Link to='/Poll'><button>view poll</button></Link>

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
