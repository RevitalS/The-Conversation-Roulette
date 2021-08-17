import React, {Component} from 'react';
import GameComponent from './components/GameComponent'
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
  buttonText:"הוספת סט שאלות חדש",
  currentTitle: "",
};

callAPI() {
    fetch(serverUrl + '/')
    .then(res => res.json())
   .then(data => {
    this.setState({q: data.q,
      subjects: data.subjects,
      currentTitle:  data.q.subject,
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
  buttonText:"חזרה לרולטת השיחה"});
  } else {
    this.setState({isQuestionSet: false,
      buttonText:"הוספת סט שאלות חדש"});
  }
  //console.log(this.state.isQuestionSet);
}

handleSelect = e => {
  this.setState({currentTitle:e});
  console.log(e, "title", serverUrl, "url");
  fetch(serverUrl + '/changeset', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: e})
})
//console.log("data")
//fetch(this.props.serverUrl + '/changeset')
.then(res => res.json())
.then(data => {
  console.log(data, "data new");
 // this.setState({q: data.q});
  const titles = data.q.sets.map( s => s.title);
  this.setState( {
      q: data.q,
      titles: titles,
      currentTitle:  data.q.subject,
  });
    })
    .catch( err => console.log(err, "don't get data"));
  //console.log(e, "app");

}


// handleSelect = e => {
//   console.log(this.props.serverUrl);
//   console.log(e);
//  fetch(this.props.serverUrl + '/changeset', {
//      method: 'post',
//      headers: {'Content-Type': 'application/json'},
//      body: JSON.stringify({title: e})
//  })
//  //console.log("data")
//  //fetch(this.props.serverUrl + '/changeset')
//  .then(res => res.json())
//  .then(data => {
//    console.log(data.q, "data");
//    this.setState({q: data.q})
//      })
//      .catch( err => console.log(err));
// }


  render() {
    return (
      <div className="App">
        <NavbarLayout handleClick={this.handleClickQuestionSet} subjects={this.state.subjects}
         buttonText={this.state.buttonText} serverUrl={serverUrl}
         currentTitle={this.state.currentTitle} handleSelect={this.handleSelect}
         q = {this.q}
          />
          <div className="expand">
          {
            !this.state.isLoading ?(
              !this.state.isQuestionSet ?(
            <GameComponent q={this.state.q} titles ={this.state.titles} title={this.state.currentTitle}/>
            ) : <AddQuestionSet serverUrl={serverUrl}/>) 
            
            : (<div>
              <h1>Wait till loading</h1>
              </div>)
          }
          
          </div>
        <div className="credits">Ⓒ </div>
      </div>
    );
  }
}

export default App;
