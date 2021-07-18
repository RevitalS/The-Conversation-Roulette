import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NavbarLayout extends Component {

 constructor (props){
    super(props);
 }


 componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('props in child nav', this.props.subjects) ;
}

// handleSelect = e => {
//    console.log(this.props.serverUrl);
//    console.log(e);
//   fetch(this.props.serverUrl + '/changeset', {
//       method: 'post',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({title: e})
//   })
//   //console.log("data")
//   //fetch(this.props.serverUrl + '/changeset')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.q, "data");
//     this.setState({q: data.q})
//       })
//       .catch( err => console.log(err));
// }


render() {
  const {subjects, buttonText} = this.props;
return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="בחרו נושא" id="basic-nav-dropdown" onSelect={this.props.handleSelect} >
                {
                 
                 subjects  && subjects.length >0? 
                 //this.chooseSubject()
                 subjects.map((sub, i) => 
                  <NavDropdown.Item eventKey={sub} key={i}>{sub}</NavDropdown.Item>
                  )
                    :null
                    
                }
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
    </Nav>
      <Button variant="outline-success" onClick={() => this.props.handleClick()}>{buttonText}</Button>
  </Navbar.Collapse>
</Navbar>
);

}
}

export default NavbarLayout;