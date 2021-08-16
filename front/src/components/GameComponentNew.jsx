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

   // const titles = this.props.q.sets.map( s => s.title);
    // this.state = {
    //     q: this.props.q,
    //     titles: this.props.titles
    // }

    //const {q} = this.props.q;
    // console.log("q game", this.state.q);
    // console.log("titles game", this.state.titles);
}

// componentWillUpdate(prevProps, prevState, snapshot) {
//         const titles = this.props.q.sets.map( s => s.title);
//         this.setState({
//             q: this.props.q,
//             titles: titles
//         })
//   }

// handleSelect = e => {
//    // console.log(this.props.serverUrl);
//     console.log("select hanldle new game");
//    fetch(this.props.serverUrl + '/changeset', {
//        method: 'post',
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify({title: e})
//    })
//    //console.log("data")
//    //fetch(this.props.serverUrl + '/changeset')
//    .then(res => res.json())
//    .then(data => {
//   //   console.log(data.q, "data");
//      this.setState({q: data.q})
//        })
//        .catch( err => console.log(err));
//  }

    
    render() {
       // this.setState({q:this.props});
    //     const titles = this.props.q.sets.map( s => s.title);
    //     this.setState({
    //         q: this.props.q,
    //         titles: titles
    //     })
    //     //const {q} = this.props;
    //    // const titles = q.sets.map( s => s.title);
    //     console.log("titles game", titles);
    //    // console.log(this.q, 'q render');
    const {q, titles} = this.props;
        return (
            <div>
                <div>
                    <h1 className="gameTitle">להעיף את הנגיף!</h1>
                </div>
                <div className="gameWrapper">
                    <Container>
                            <Row>
                                {[...Array(q.sets[0].content.length +1)].map((e, i) => {
                                    return <Col className="col question-type" key={i}>
                                        {
                                            i === 0 ?
                                                <div> </div>
                                            :
                                                <div>{i}</div>
                                }
                                        </Col>
                                })}
                        </Row>
                        <div></div>
                        
                            {
                                q.sets.map((set, i) => 
                                <Row key={i}>
                                   
                                        <div className="col question-type">{set.title}</div>
                                        {set.content.map ((question, j) => 
                                            <div className="col" key={"set" + i+""+j}>
                                                <TileComponent question={question} type={"set"+i} emoji={emojiList[i]}/>
                                            </div>                        
                                        )}
                                   
                                    </Row>
                                ) 
                            }
                        
                        </Container>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <RandomTilePickerComponent questionsSetTitles={titles} optionsNumber={q.sets[0].content.length}/>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <InstructionsComponent/>
                </div>
            </div>
        )
    }

}

export default GameComponentNew