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

// chooseSubject() {
//   console.log("subject in nav",this.props.subjects);
//   let template =[];
//   if (this.props.subjects.length > 0) {
//     console.log(this.props.subjects);
//         this.props.subjects.map(sub => {(
//      template.push( <NavDropdown.Item href="#action/3.1">{sub}</NavDropdown.Item>)

//   ); 
//           console.log(sub);
// })
// console.log(template);
//   return template;
//   }
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
      <NavDropdown title="בחר נושא" id="basic-nav-dropdown">
                {
                 
                 subjects  && subjects.length >0? 
                 //this.chooseSubject()
                 subjects.map((sub, i) => 
                  <NavDropdown.Item href="#action/3.1" key={i}>{sub}</NavDropdown.Item>
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