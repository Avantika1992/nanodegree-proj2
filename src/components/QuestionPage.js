import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'
import Question from './Question'


class QuestionPage extends Component {

  render() {
    const {id}=this.props
    return (

       <div>
         <Question id={id}/>
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



export default connect(mapStateToprops)(QuestionPage)
