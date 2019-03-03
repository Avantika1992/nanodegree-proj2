import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'


class Logout extends Component {
  constructor(props) {
   super(props);
   this.state = {user_selected:''};
   this.handleSubmit = this.handleSubmit.bind(this);
 }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.user_selected))

  }

  render() {
    return (
      <div className='center'>
        <form onSubmit={this.handleSubmit}>
        <button type='submit'>Logout</button>
        </form>
      </div>

    )
  }
}


export default connect()(Logout)
