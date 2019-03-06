import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Home from './Home'
import HomeTwo from './HomeTwo'
import LoadingBar from 'react-redux-loading'
import LeaderBoard from './Leaderboard'
import Logins from './Logins'
import Logout from './logout'
import Nav from './Nav'
import Polls from './Polls'
import UserQuestion from './UserQuestion'
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
          ?<div><Route path="/" exact component={Logins} />
                <Route path="/leaderBoard" exact component={Logins} />
                <Route path="/add" exact component={Logins} />
                <Route path="/questions/:id" exact component={Logins} />
                <h3>Please login to view the pages</h3></div>
          :<div>
             <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/add' exact component={UserQuestion} />
             <Route path='/leaderBoard' exact component={LeaderBoard} />
             <Route path="/questions/:id" exact component={Polls} />
             <Route path='/logins' exact component={empty} />
             <Route path='/logout' exact component={Logout} />
             <Route path='/ansque' exact component={HomeTwo} />
             <Route path='/unansque' exact component={Home} />
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
