import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'

class Nav extends Component {
  render(){
  return(
    <nav className='nav'>
     <ul>
      <li>
       <NavLink to='/' exact activeClassName='active'>
        Home
       </NavLink>
      </li>
      <li>
       <NavLink to='/add' exact activeClassName='active'>
        New Question
       </NavLink>
      </li>
      <li>
       <NavLink to='/leaderBoard' exact activeClassName='active'>
        Leader Board
       </NavLink>
      </li>
      <li>
        &emsp;&emsp;Hello,{this.props.authedUser}
      </li>
      <li>
       <NavLink to='/logins' exact activeClassName='active'>
        Logout
       </NavLink>

      </li>
     </ul>
    </nav>
  )
}
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  };
}

export default connect(mapStateToProps)(Nav)
