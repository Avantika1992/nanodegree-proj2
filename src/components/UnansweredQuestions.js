import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {formatQuestion,formatDate} from '../utils/helpers'
import {saveQuestionAnswer} from '../utils/api'

class UnansQuestion extends Component {

  state={value:''}
  handleRadioButton(value) {
    this.setState({
      value: value
    });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({value:this.state.value})
    console.log('submitted,',this.props.authedUser,this.state.value)
    saveQuestionAnswer({authedUser: this.props.authedUser,
                       qid: this.props.question.id,
                       answer: this.state.value
})
  }

  render() {
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
          <input type="radio" name='ip' checked={this.state.value === optionOneText}
    onChange={() => this.handleRadioButton(optionOneText)}/>{optionOneText}
          &emsp;-votes:{optionOneVotes}
          <br/>
          <input type="radio" name='ip' checked={this.state.value === optionTwoText}
    onChange={() => this.handleRadioButton(optionTwoText)}/>{optionTwoText}
          &emsp;-votes:{optionTwoVotes}

          <br/>
          <br/>
          {'Value Chosen:'}{this.state.value}

          <br/>
          <br/>
          <input type='submit' name="submit"/>

          </form>
          <br/>

          <Link to='/Poll'><button>view poll</button></Link>
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


export default connect(mapStateToProps)(UnansQuestion)
