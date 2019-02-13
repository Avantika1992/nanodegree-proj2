import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'


class Leaderboard extends Component {
  render() {
    const {question}=this.props
    const{
        name,avatar,timestamp,optionOne
        ,optionTwo,optionOneVotes,
        optionOneText,optionTwoVotes
        ,optionTwoText,answers,questions
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
          &emsp;<h2>{name}</h2>
          <br/>
          <div className='horizontalLine'>
          &emsp;Answered Questions={answers}&emsp;
          <br/>
          &emsp;Created Questions={questions}&emsp;

          </div>
        </div>

        <div className='verticalLine'>
        <br/>
         <h2>&emsp;Score:{answers+questions}</h2>

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

export default connect(mapStateToProps)(Leaderboard)
