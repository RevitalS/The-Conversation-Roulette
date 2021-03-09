import React, {Component} from 'react'
import {questionsSet1, questionsSet2} from '../questions.js'
import './ChangeQuestionSetComponent.css'

class ChangeQuestionSetComponent extends Component {
    render() {     
        return (
            <div className="chooseQuestionsSet">
                <button className="chooseQuestionsSetButton" onClick={() => this.props.changeQuestionsSet(questionsSet1)}>
                 גילאי 8+
                </button>
                <button className="chooseQuestionsSetButton" onClick={() => this.props.changeQuestionsSet(questionsSet2)}>
                 גילאי 5-7
                </button>
          </div>
        )
    }
}

export default ChangeQuestionSetComponent