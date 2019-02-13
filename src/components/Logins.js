import React, { Component } from 'react'
import {connect} from 'react-redux'

class Logins extends Component {
  state={
      user_selected:'null',
    }
  eventHandler=(e)=>{
  this.setState({user_selected:e.target.value})

    }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({user_selected:e.target.value})
    console.log(this.state.user_selected)
  }

  render() {
    return (
      <div className='center'>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <select value={this.state.user_selected}
        onChange={this.eventHandler.bind(this)} >
         <option>Select User</option>
         <option value="sarah_edo">sarah_edo</option>
         <option value="tylermcginnis">tylermcginnis</option>
         <option value="dan_abramov">dan_abramov</option>
        </select>
        <br/>
        <br/>
        <button type='submit'>Sign In</button>
        </form>
      </div>

    )
  }
}


export default Logins
