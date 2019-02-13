export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function addUserQuestion(users){
  return {
    type:ADD_USER_QUESTION,
    users,
  }
}
