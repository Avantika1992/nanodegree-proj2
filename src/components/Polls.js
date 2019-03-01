import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'
import Question from './Question'
import QuestionPage from './QuestionPage'



class Polls extends Component {

  render() {
    const {question}=this.props
    const {authedUser}=this.props

    console.log(this.props.id)
    return (

      <div>
          <Question id={this.props.id}/>

      </div>

    )
  }
}

function mapStateToProps ({authedUser, users, questions}, props) {
  const question = questions[id];
  const id=props.match.params.id
  return {
    id,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  };
}

export default connect(mapStateToProps)(Polls)
