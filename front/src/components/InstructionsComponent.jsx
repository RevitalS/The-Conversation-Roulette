import React, {Component} from 'react'
import './InstructionsComponent.css'

class InstructionsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showInstructions: false
        }

        this.showInstructions = this.showInstructions.bind(this)
    }
    
    render() {        
        return (
            <div className="instructions">
                <button onClick={this.showInstructions}>
                    {!this.state.showInstructions && <div>הוראות</div>}
                    {this.state.showInstructions && <div>הגרילו משבצת על ידי לחיצה על הכפתור "איזו משבצת לבחור". לחצו על המשבצת שהוגרלה והשיבו על השאלה. סגרו את המשבצת על ידי לחיצה נוספת. המשחק מתאים לשימוש במחשב ובנייד.</div>}
                </button>
            </div>
        )
    }

    showInstructions() {
        this.setState(prevState => ({
            showInstructions: !prevState.showInstructions
        }))
    }
}

export default InstructionsComponent