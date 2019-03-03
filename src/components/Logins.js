import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {Redirect} from 'react-router-dom'

class Logins extends Component {
  constructor(props) {
   super(props);
   this.state = {user_selected:'',loggedIn:false};

   this.eventHandler = this.eventHandler.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

  eventHandler=(e)=>{
  e.preventDefault();
  this.setState({user_selected:e.target.value})

    }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.user_selected))
    console.log(this.state.user_selected)
    this.setState({loggedIn:true})
  }


  render() {
    if(this.state.loggedIn){
      return <Redirect to={'/'} />
    }
    return (
      <div className='center'>
        <form onSubmit={this.handleSubmit}>
        <select value={this.state.user_selected}
        onChange={this.eventHandler} >
         <option hidden value=''></option>
         <option value="sarahedo">sarahedo</option>
         <option value="tylermcginnis">tylermcginnis</option>
         <option value="johndoe">johndoe</option>
        </select>
        <br/>
        <br/>
        <button type='submit'>Sign In</button>
        </form>
      </div>

    )
  }
}


export default connect()(Logins)
