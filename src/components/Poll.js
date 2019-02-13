import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'
import Question from './Question'
import NewQuestion from './NewQuestion'

class Poll extends Component {

  render() {
    const {id}=this.props
    return (

       <div>
         poll
       </div>
    )
  }
  }

  function mapStateToprops ({authedUser,questions,users},props){
  const {id}=props.match.params
  return{
    id,
  }
  }




export default connect(mapStateToprops)(Poll)
