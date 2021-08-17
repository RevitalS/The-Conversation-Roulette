import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import './NavbarLayout.css'

class NavbarLayout extends Component {

 constructor (props){
    super(props);
 }


 componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('props in child nav', this.props.subjects) ;
}


render() {
  const {subjects, buttonText} = this.props;
return (
<Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    <Button className="btn-navbar"
       onClick={() => this.props.handleClick()}>{buttonText}
       </Button>
      <NavDropdown variant="info"
       title="בחירת נושא אחר" id="basic-nav-dropdown" onSelect={this.props.handleSelect} >
                {
                 subjects  && subjects.length >0? 
                 //this.chooseSubject()
                 subjects.map((sub, i) => 
                  <NavDropdown.Item eventKey={sub} key={i}>{sub}</NavDropdown.Item>
                  )
                    :null
                    
                }
                </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

}
}

export default NavbarLayout;