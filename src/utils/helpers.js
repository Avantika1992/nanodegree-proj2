export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author, authedUser) {
  const { id,optionOne,optionTwo,optionOneVotes,optionOneText,optionTwoVotes,optionTwoText, timestamp} = question
  const { name, avatarURL,answers,questions } = author

  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
    optionOneVotes: optionOne.votes,
    optionOneText: optionOne.text,
    optionTwoVotes: optionTwo.votes,
    optionTwoText: optionTwo.text,
    answers:Object.keys(answers).length,
    questions:questions.length,

  }
}
