import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {formatQuestion,formatDate} from '../utils/helpers'

class AnsQuestion extends Component {

  render() {
    const {question}=this.props
    const {authedUser}=this.props
    const{
        name,avatar,timestamp,optionOne
        ,optionTwo,optionOneVotes,
        optionOneText,optionTwoVotes
        ,optionTwoText,id,
      }=question
    return (

      <div className='question'>

      {Object.values(optionOneVotes).indexOf(authedUser) > -1||Object.values(optionTwoVotes).indexOf(authedUser) > -1?
        <div>
         <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
          />

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
        </div>:null
      }
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


export default connect(mapStateToProps)(AnsQuestion)
