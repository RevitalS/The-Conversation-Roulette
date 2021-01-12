import React, {Component} from 'react';
import GameComponent from './components/GameComponent'
import './App.css';
import './bootstrap.css';

const serverUrl =  'http://localhost:3000';

class App extends Component {

state = {
  q: {},
  isLoading: true
};

callAPI() {

    fetch(serverUrl + '/')
    .then(res => res.json())
   .then(data => {console.log(data);
    this.setState({q: data,
    isLoading: false})
   })
  //  .then(data => this.setState({q: data}))
//    .then (data => this.setState({data : JSON.stringify(data)}))
        //  .then(data =>  this.setState({actionQuestions: data.actionQuestions,
        //          emotionQuestions: data.emotionQuestions,
        //          associationQuestions: data.associationQuestions,
        //          situationQuestions: data.situationQuestions,
        //          thoughtQuestions: data.thoughtQuestions,
        //          }))
      // .then(data =>  this.setState({questions: data}))
    .catch(err => this.setState({err, isLoading: false}));
}


componentDidMount() {
    this.callAPI();
    console.log(this.state);
}


  render() {
    return (
      <div className="App">

          <div className="expand"> 
          {
            !this.state.isLoading ?(
            <GameComponent q={this.state.q}/>
            ) : (<div>
              <h1>Wait till loading</h1>
              </div>)
          }
          </div>
        <div className="credits">Ⓒ כל הזכויות שמורות להגר גוטשטדט, שחר גוטשטדט, עדי אבלס ואורית גודקאר</div>
      </div>
    );
  }
}

export default App;
