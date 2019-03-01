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
import AnsQuestion from './AnsweredQuestions'
import UnansQuestion from './UnansweredQuestions'
import NotFound from './NotFound'
import empty from './empty'

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
        <Route path='/logins' exact component={Logins} />
        {this.props.loading===true
          ?<h3>Please login to view the pages</h3>
          :<div>
             <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/add' exact component={UserQuestion} />

             <Route path='/leaderBoard' exact component={()=><LeaderBoard users={this.props.users} questions={this.props.questions}/>} />
             <Route exact path="/questions/:id" component={Polls} />
             <Route path='/logins' exact component={empty} />

             {this.props.questionIds.map((id)=>(
             <Route path='/ansque' exact component={()=><li key={id}><AnsQuestion id={id}/></li>} />
             ))}
             {this.props.questionIds.map((id)=>(
             <Route path='/unansque' exact component={()=><li key={id}><UnansQuestion id={id}/></li>} />
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
  loading:authedUser==='',
  questionIds:Object.keys(questions)
  .sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(App)
