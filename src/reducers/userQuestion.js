import {ADD_USER_QUESTION} from '../actions/userQuestion'

export default function users(state={},action){
      switch(action.type){
          case ADD_USER_QUESTION:
            return{
              ...state,
              [question.author]: {
                ...state[question.author],
                questions: state[question.author].questions.concat([question.id])
              }
            }
            default:
              return state
        }
      }
