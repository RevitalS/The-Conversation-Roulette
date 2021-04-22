import React, {Component} from 'react'
import TileComponent from './TileComponent'
import RandomTilePickerComponent from './RandomTilePickerComponent'
import InstructionsComponent from './InstructionsComponent'
import ChangeQuestionSetComponent from './ChangeQuestionSetComponent'
import {questionsSet1, questionsSet2} from '../questions.js'
import '../bootstrap.css'
import './GameComponent.css'
import { Container, Row, Col } from 'react-bootstrap'


const emojiList = [":smile:",":green_heart:",":star2:", ":pig:",":dolphin:",
":hibiscus:",":gift:",":surfer:",":shaved_ice:",":strawberry:",":blue_car:",":boat:"]

class GameComponentNew extends Component {
    constructor(props) {
        super(props)

    this.state = {
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
    console.log('props in child component game', this.props.q) ;
  }

  componentDidMount() {
  }
    
    render() {
        this.setState({q:this.props});
        const {q} = this.props;
        console.log(this.q, 'q render');
        return (
            <div>
                <div>
                    <h1 className="gameTitle">להעיף את הנגיף!</h1>
                </div>
                <div className="gameWrapper">
                    <ChangeQuestionSetComponent changeQuestionsSet={this.changeQuestionsSet}/>
                    <Container>
                            <Row>
                                {[...Array(q.sets.length)].map((e, i) => {
                                    return <Col className="col question-type" key={i + 1}>
                                        <div>{i + 1}</div>
                                        </Col>
                                })}
                        </Row>
                        <div></div>
                        <Row>
                            {
                                q.sets.map((set, i) => 
                                    <Col>
                                        <div className="col question-type">{set.title}</div>
                                        {set.content.map ((question, j) => 
                                            <div className="col" key={"set" + i+""+j}>
                                                <TileComponent question={question} type={"set"+i} emoji={emojiList[i]}/>
                                            </div>                        
                                        )}
                                    </Col>
                                ) 
                            }
                        </Row>
                        </Container>
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
        this.setState({q:questionsSet,
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

export default GameComponentNew