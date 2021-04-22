import React, {Component} from 'react';
import GameComponent from './components/GameComponentNew'
import AddQuestionSet from './components/AddQuestionSet'
import './App.css';
import './bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import NavbarLayout from './components/layout/NavbarLayout';

const serverUrl =  'http://localhost:3000';

class App extends Component {

handleClickQuestionSet= this.handleClickQuestionSet.bind(this);
//chooseSubject = this.chooseSubject.bind(this);
state = {
  q: {},
  subjects: {},
  isLoading: true,
  isQuestionSet: false,
  buttonText:"Add new Qeustions Set",
};

callAPI() {

    fetch(serverUrl + '/')
    .then(res => res.json())
   .then(data => {
    this.setState({q: data.q,
      subjects: data.subjects,
    isLoading: false})
   })
    .catch(err => this.setState({err, isLoading: false}));
}


componentDidMount() {
    this.callAPI();
   // console.log(this.state);
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('state in app', this.state) ;
  //this.chooseSubject();
  //this.setState{}
}

handleClickQuestionSet() {
  if (!this.state.isQuestionSet) {
  this.setState({isQuestionSet: true,
  buttonText:"Go Back To The Example Qeustions Set"});
  } else {
    this.setState({isQuestionSet: false,
      buttonText:"Add new Qeustions Set"});
  }
  console.log(this.state.isQuestionSet);
}



  render() {
    return (
      <div className="App">
        <NavbarLayout handleClick={this.handleClickQuestionSet} subjects={this.state.subjects}
         buttonText={this.state.buttonText} ></NavbarLayout>
          <div className="expand">
          {
            !this.state.isLoading ?(
              !this.state.isQuestionSet ?(
            <GameComponent q={this.state.q}/>
            ) : <AddQuestionSet serverUrl={serverUrl}/>) 
            
            : (<div>
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
