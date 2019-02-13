import {saveQuestion} from '../utils/api'
import {showLoading,hideLoading} from 'react-redux-loading'
import {addUserQuestion} from '../actions/userQuestion'
import {addQuestion} from '../actions/questions'

export default function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { optionOneText, optionTwoText } = question
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: authedUser
    })
      .then(question => dispatch(addQuestion(question)))
      .then(question => dispatch(addUserQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
