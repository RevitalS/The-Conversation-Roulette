import React, {Component} from 'react';
import './RandomTilePickerComponent.css';

class RandomTilePickerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: null,
            number: null
        }

        this.pickRandomTile = this.pickRandomTile.bind(this)
    }
    
    render() {
        return (
            <div className="randomTilePicker">
                <button className="randomTilePickerButton" onClick={this.pickRandomTile}>איזו משבצת לבחור?</button>
                {(this.state.type !== null && this.state.number !== null) && <div className="randomTilePickerAnswer">{this.state.type + " " + this.state.number}</div>}
            </div>
        )
    }

    pickRandomTile() {
        const types = this.props.questionsSetTitles
        const randomType = types[Math.floor(Math.random() * types.length)]

        const randomNumber = Math.floor(Math.random() * 7) + 1
        
        this.setState({
            type: randomType,
            number: randomNumber
        })
    }
}

export default RandomTilePickerComponent