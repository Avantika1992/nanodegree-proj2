import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Route,Link,withRouter,Redirect} from 'react-router-dom'
import {formatQuestion,formatDate} from '../utils/helpers'
import {saveQuestionAnswer} from '../utils/api'
import Polls from './Polls'

class UnansQuestion extends Component {

  state={value:'', pollViewed:false}

  pollHandler=(e)=>{
    e.preventDefault()
    console.log(this.props.id)
    this.setState({pollViewed:true})
  }



  render() {
    if(this.state.pollViewed){
      const route = "/que/" + this.props.id
    return <Redirect to={route} />
  }
    const {question}=this.props
    const {authedUser}=this.props
    const {
        name,avatar,timestamp,optionOne
        ,optionTwo,optionOneVotes,
        optionOneText,optionTwoVotes
        ,optionTwoText,id,
          }=question


    if(this.state.value==optionOneText){
        console.log(optionOneVotes)
      }
    if(this.state.value==optionTwoText){
        console.log(optionTwoVotes)
      }
    return (

      <div className='question'>

      {Object.values(optionOneVotes).indexOf(authedUser) > -1 || Object.values(optionTwoVotes).indexOf(authedUser) > -1 ?
        null:<div>
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
          <form onSubmit={this.handleSubmit}>
          {optionOneText}
          &emsp;-votes:{optionOneVotes}
          <br/>
          {optionTwoText}
          &emsp;-votes:{optionTwoVotes}
          <br/>
          <br/>
          </form>
          <button onClick={this.pollHandler}>view poll</button>
          </div>
        </div>
        </div>
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


export default withRouter(connect(mapStateToProps)(UnansQuestion))
