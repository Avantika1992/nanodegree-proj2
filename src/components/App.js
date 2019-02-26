import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import {formatQuestion,formatDate} from '../utils/helpers'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import LeaderBoard from './Leaderboard'
import Logins from './Logins'
import QuestionPage from './QuestionPage'
import Nav from './Nav'
import Polls from './Polls'
import UserQuestion from './UserQuestion'
import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'
import NotFound from './NotFound'

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
             <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/add' exact component={UserQuestion} />

             <Route path='/leaderBoard' exact component={()=><LeaderBoard users={this.props.users} questions={this.props.questions}/>} />
             <Route exact path="/que/:id" component={Polls} />
             <Route path='/logins' exact component={Logins} />

             {this.props.questionIds.map((id)=>(
             <Route path='/ansque' exact component=<li key={id}>{()=><AnsweredQuestions id={id} key={id}/>}</li> />
             ))}
             {this.props.questionIds.map((id)=>(
             <Route path='/unansque' exact component=<li key={id}>{()=><UnansweredQuestions id={id} key={id}/>}</li> />
              ))}
             <Route path="*" component={NotFound}/>
             </Switch>
           </div>}
      </div>
      </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser,questions,users},{id}){
  const keys = Object.keys(users)
  const question=questions[id]
  return {

  users,
  userIds:Object.keys(users),
  questions,
  loading:authedUser===null,
  questionIds:Object.keys(questions)
  .sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(App)
