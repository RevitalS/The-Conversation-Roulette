import React, {Component} from 'react'
import Emoji from 'react-emoji-render'
import './TileComponent.css'
import { Button, Card} from 'react-bootstrap'

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
                {!this.state.showQuestion ?
                <Button variant={this.props.type} onClick={this.showQuestion}>
                    {!this.state.showQuestion && <Emoji text={this.props.emoji}/>} 
                </Button> 
                : <Card onClick={this.showQuestion} className={'btn-'+this.props.type}>
                    {this.state.showQuestion && this.props.question.content}
                </Card>
        }
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