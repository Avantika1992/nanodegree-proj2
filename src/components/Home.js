import React, { Component } from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import Leaderboard from './Leaderboard'
import Logins from './Logins'
import {NavLink} from 'react-router-dom'
import UnansQuestion from './UnansweredQuestions'
import Polls from './Polls'

class Home extends Component {
  render() {

    return (

      <div>
        <h3 className='center'>Home</h3>
        <NavLink to='/ansque' exact activeClassName='active'><button className='button'>Answered Questions</button></NavLink>
        <NavLink to='/unansque' exact activeClassName='active'><button className='button'>Unanswered Questions</button></NavLink>
          {this.props.questionIds.map((id)=>(
              <li key={id}><UnansQuestion id={id}/></li>
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


export default connect(mapStateToProps)(Home)
