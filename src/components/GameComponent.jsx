import React, {Component} from 'react'
import TileComponent from './TileComponent'
import RandomTilePickerComponent from './RandomTilePickerComponent'
import InstructionsComponent from './InstructionsComponent'
import ChangeQuestionSetComponent from './ChangeQuestionSetComponent'
import {questionsSet1, questionsSet2} from '../questions.js'
import '../bootstrap.css'
import './GameComponent.css'


class GameComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {q : {}}

    //     this.state = {
    //         actionQuestions: questionsSet1.actionQuestions,
    //         emotionQuestions: questionsSet1.emotionQuestions,
    //         situationQuestions: questionsSet1.situationQuestions,
    //         thoughtQuestions: questionsSet1.thoughtQuestions,
    //         AssociationQuestions: questionsSet1.associationQuestions,
    //         questionsTitles: [
    //             questionsSet1.actionQuestions.title,
    //             questionsSet1.emotionQuestions.title,
    //             questionsSet1.situationQuestions.title,
    //             questionsSet1.thoughtQuestions.title,
    //             questionsSet1.associationQuestions.title
    //         ]
    //     }
    // }

 //const trytojson = JSON.parse(this.props.questionsSet1);
 //this.setState({q: this.props.q});
 console.log(' in child',this.props.q);
// const q = this.props.questionsSet1;
    this.state = {
        actionQuestions: questionsSet1.actionQuestions,
        emotionQuestions: questionsSet1.emotionQuestions,
        situationQuestions: questionsSet1.situationQuestions,
        thoughtQuestions: questionsSet1.thoughtQuestions,
        AssociationQuestions: questionsSet1.associationQuestions,
        questionsTitles: [
            questionsSet1.actionQuestions.title,
            questionsSet1.emotionQuestions.title,
            questionsSet1.situationQuestions.title,
            questionsSet1.thoughtQuestions.title,
            questionsSet1.associationQuestions.title
        ]
    }


}


componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('props in child component', this.props.q) ;
  }

  componentDidMount() {
      this.setState({q:this.props.q})
      console.log('props in child component mount', this.state.q) ;
  }
    
    render() {
        const {q} = this.props;
        return (
            <div>
                <div>
                    <h1 className="gameTitle">להעיף את הנגיף!</h1>
                </div>
                <div className="gameWrapper">
                <ChangeQuestionSetComponent changeQuestionsSet={this.changeQuestionsSet}/>
                <div className="container">
                    <div className="row">
                    <div className="col question-type"><div></div></div>
                        {[...Array(7)].map((e, i) => {
                            return <div className="col question-type" key={i + 1}><div>{i + 1}</div></div>
                        })}
                    </div>
                    <div className="row">
                        <div className="col action question-type">{q.actionQuestions.title}</div>
                        {
                            q.actionQuestions.content.map ((question, index) => 
                                <div className="col" key={"action" + index}><TileComponent question={question} type="action" emoji=":surfer:"/></div>                        
                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col emotion question-type">{q.emotionQuestions.title}</div>
                        {
                            q.emotionQuestions.content.map ((question, index) => 
                                <div className="col" key={"emotion" + index}><TileComponent question={question} type="emotion" emoji=":heart:"/></div>                       
                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col situation question-type">{q.situationQuestions.title}</div>
                        {
                            q.situationQuestions.content.map ((question, index) => 
                                <div className="col" key={"situation" + index}><TileComponent question={question} type="situation" emoji=":family:"/></div>                        
                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col thought question-type">{q.thoughtQuestions.title}</div>
                        {
                            q.thoughtQuestions.content.map ((question, index) => 
                                <div className="col" key={"thought" + index}><TileComponent question={question} type="thought" emoji=":thought_balloon:"/></div>                        
                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col association question-type">{q.associationQuestions.title}</div>
                        {
                            q.associationQuestions.content.map ((question, index) => 
                                <div className="col" key={"association" + index}><TileComponent question={question} type="association" emoji=":bulb:"/></div>                        
                            )
                        }
                    </div>
                </div>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <RandomTilePickerComponent questionsSetTitles={this.state.questionsTitles}/>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <InstructionsComponent/>
                </div>
            </div>
        )
    }

    changeQuestionsSet = (questionsSet) => {
        this.setState({
            actionQuestions: questionsSet.actionQuestions,
            emotionQuestions: questionsSet.emotionQuestions,
            situationQuestions: questionsSet.situationQuestions,
            thoughtQuestions: questionsSet.thoughtQuestions,
            AssociationQuestions: questionsSet.associationQuestions,
            questionsTitles: [
                questionsSet.actionQuestions.title,
                questionsSet.emotionQuestions.title,
                questionsSet.situationQuestions.title,
                questionsSet.thoughtQuestions.title,
                questionsSet.associationQuestions.title
            ]
        })
    }
}

export default GameComponent