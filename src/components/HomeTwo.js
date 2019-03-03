import React, { Component } from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import Leaderboard from './Leaderboard'
import Logins from './Logins'
import {NavLink} from 'react-router-dom'
import AnsQuestion from './AnsweredQuestions'
import Polls from './Polls'

class HomeTwo extends Component {
  render() {

    return (

      <div>
        <h3 className='center'>Answered Questions</h3>

          {this.props.questionIds.map((id)=>(
              <li key={id}><AnsQuestion id={id}/></li>
          ))}
      </div>
    )
  }
}

function mapStateToProps({users,questions}){
  return {
    questionIds:Object.keys(questions)
    .sort((a,b)=>questions[b].timestamp-questions[a].timestamp),

  }
}


export default connect(mapStateToProps)(HomeTwo)
