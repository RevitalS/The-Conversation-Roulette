import React, {Component} from 'react'
import Emoji from 'react-emoji-render'
import './TileComponent.css'
import { Button} from 'react-bootstrap'

class TileComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showQuestion: false
        }

        this.showQuestion = this.showQuestion.bind(this)
    }
    
    render() {     
        return (
            <div className="tileComponent">
                <Button variant={this.props.type} onClick={this.showQuestion}>
                    {!this.state.showQuestion && <Emoji text={this.props.emoji}/>}
                    {this.state.showQuestion && this.props.question.content}
                </Button>
            </div>
        )
    }

    showQuestion() {
        this.setState(prevState => ({
            showQuestion: !prevState.showQuestion
        }))
    }
}

export default TileComponent