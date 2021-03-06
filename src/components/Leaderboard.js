import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {formatQuestion,formatDate} from '../utils/helpers'


class Leaderboard extends Component {

  render() {

    function sort(values, questions) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < values.length; i += 1) {
        if ((Object.keys(values[i - 1].answers).length+questions[values[i-1].id]) <
           (Object.keys(values[i].answers).length+questions[values[i].id])) {
          done = false;
          var tmp = values[i - 1];
          values[i - 1] = values[i];
          values[i] = tmp;
        }
      }
    }
    return values;
  }
    const {questions,users}=this.props
      const {authedUser}=this.props
      let menuItems = [];
      let scoreVal=[];
      let newArr=[]

      var values = Object.keys(users).map(function(key){
      return users[key];
      });

       var dict={}
       for(var i=0;i<values.length;i++){
         dict[values[i].id]=values[i].questions.length
       }

      values = sort(values,dict)
      for(var i=0;i<values.length;i++){
      const score=(Object.keys(values[i].answers).length+dict[values[i].id])
        menuItems.push( <li key={values[i].id}><div className='question'>
            <img
             src={values[i].avatarURL}
             alt={`Avatar of ${values[i].name}`}
             className='avatar'
             />
             &emsp;
           <div className='verticalLine'>
             &emsp;<h2>{values[i].name}</h2>
             <br/>
             <div className='horizontalLine'>
             &emsp;Answered Questions={Object.keys(values[i].answers).length}&emsp;
             <br/>
             &emsp;Created Questions={dict[values[i].id]}&emsp;

             </div>
           </div>

           <div className='verticalLine'>
           <br/>
            <h2>&emsp;Score:{score}</h2>

           </div>
          </div>
        </li>);

        }

    return (
      menuItems
    )
  }
}

function mapStateToProps ({authedUser, users, questions},{id}) {
  const question=questions[id];
  const user = users[id];
  return {
    questions,
    users,
    id,
    authedUser,
      question: question
      ?formatQuestion(question, users[question.author], authedUser)
      :null
  };
}

export default connect(mapStateToProps)(Leaderboard)
