import React from 'react'
import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'
import {showLoading,hideLoading} from 'react-redux-loading'
import Logins from '../components/Logins'



const AUTHED_ID=''

export function handleInitialData(){
  return(dispatch)=>{
    dispatch(showLoading())
    return getInitialData()
    .then(({users,questions})=>{
       dispatch(receiveUsers(users))
       dispatch(receiveQuestions(questions))
       dispatch(setAuthedUser(AUTHED_ID))
         dispatch(hideLoading())
    })
  }
}
