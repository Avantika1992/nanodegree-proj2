import {saveQuestion} from '../utils/api'
import {showLoading,hideLoading} from 'react-redux-loading'
import {addQuestion} from '../actions/questions'


export default function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { optionOneText, optionTwoText } = question
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      question
    })
      .then(question => dispatch(addQuestion(question)))
      .then(question => dispatch(addUserQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
