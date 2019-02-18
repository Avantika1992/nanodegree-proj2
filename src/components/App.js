import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import LeaderBoard from './Leaderboard'
import Logins from './Logins'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Nav from './Nav'
import Poll from './Poll'
import UserQuestion from './UserQuestion'
import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
      <Fragment>
      <LoadingBar />
      <div className='container'>
        <Nav />
        {this.props.loading===true
          ?null
          :<div>
             <Route path='/' exact component={Home} />
             <Route path='/newQuestion' exact component={UserQuestion} />
             {this.props.questionIds.map((id)=>(
             <Route path='/leaderBoard' exact component={()=><LeaderBoard id={id}/>} />
              ))}
             <Route path='/logins' exact component={Logins} />
             <Route path='/Poll' exact component={Poll} />
             {this.props.questionIds.map((id)=>(
             <Route path='/ansque' exact component={()=><AnsweredQuestions id={id}/>} />
             ))}
             {this.props.questionIds.map((id)=>(
             <Route path='/unansque' exact component={()=><UnansweredQuestions id={id}/>} />
              ))}
           </div>}
      </div>
      </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser,questions,users},state){
  const keys = Object.keys(users)
  return {
  users: keys.map(user => users[user]),
  loading:authedUser===null,
  questionIds:Object.keys(questions)
  .sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(App)
