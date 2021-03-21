import React, {Component} from 'react';
import GameComponent from './components/GameComponent'
import AddQuestionSet from './components/AddQuestionSet'
import './App.css';
import './bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

const serverUrl =  'http://localhost:3000';

class App extends Component {

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
   .then(data => {console.log("sub",data.subjects);
    this.setState({q: data.q,
      subjects: data.subjects,
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

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('state in app', this.state) ;
  this.chooseSubject();
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

chooseSubject() {
    console.log("subject",this.state.subjects);
    let template =[];
    if (this.state.subjects.length > 0) {
          this.state.subjects.map(sub => (
        <NavDropdown.Item href="#action/3.1">{sub['subject']}</NavDropdown.Item>
    ))
    return template;
    }
}


  render() {
    const subjects = this.state.subjects;
    return (
      <div className="App">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {
                  subjects ?
                    this.chooseSubject()
                    : null
                }
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
                <Button variant="outline-success" onClick={()=> this.handleClickQuestionSet()}>{this.state.buttonText}</Button>
            </Navbar.Collapse>
          </Navbar>
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
