import React, { Component } from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import Leaderboard from './Leaderboard'
import Logins from './Logins'

class Home extends Component {
  render() {
    console.log(this.props)
    return (

      <div>
        <h3 className='center'>Home</h3>
        <button className='button'>Answered Questions</button>
        <button className='button'>Unanswered Questions</button>
        <ul>
          {this.props.questionIds.map((id,optionOne)=>(
            <li key={id}>
              <Question id={id} />

            </li>
          ))}
        </ul>

      </div>
    )
  }
}

function mapStateToProps({questions}){
  return {
    questionIds:Object.keys(questions)
    .sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
  }
}


export default connect(mapStateToProps)(Home)
