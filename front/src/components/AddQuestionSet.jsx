import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Container} from 'react-bootstrap'
import "./AddQuestionSet.css"

class AddQuestionSet extends Component {

    constructor(props) {
        super(props)
        this.state = { isSelect: false,
            validated: false,
        };
        this.onChange = this.onChange.bind(this);

    }

    title = 'title';
    content = 'content';


      
    handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          this.setState({validated: true});
        };

    onChange = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        this.setState({ [key]: val });
        //console.log(this.state);
    }

    // sendToServer() {
    //     fetch(this.props.serverUrl + '/qeustionset', {
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(this.state)
    //     })
    //     .catch(err => this.setState({err, isLoading: false}));
    // }

    selectQeustionNum = () => {
        //this.setState({isSelect: true});
        console.log(this.state);
    }

     onFormSubmit = e => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
        this.setState({validated: true});


       // e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj);

let jsonData = {subject: formData.get('subject') }

for (let i = 0; i < this.state.topicsNum; i++) {
    const contentArr = [];
    for (let j =0; j < this.state.cardsNum; j++) {
    contentArr.push({content: formData.get(this.content+(i+1)+(j+1))})
    }
    jsonData['set'+(i+1)] = {
        title: formData.get(this.title+(i+1)),
        content: contentArr
    }
}
console.log(jsonData);
        console.log(this.props.serverUrl);
        fetch(this.props.serverUrl + '/qeustionset', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonData)
        })
        .catch(err => this.setState({err, isLoading: false}));
      }

    createQeustion = () => {
         let template = [];
         if (this.state.topicsNum === undefined || this.state.cardsNum === undefined) {
             return;
         }
        for (let i =0; i < this.state.topicsNum; i++) {
            template.push( 
            <Form.Row>
            <Form.Group controlId="formGrid">
              <Form.Label>סט מס׳ {(i+1)}</Form.Label>
              <Form.Control required type="text" placeholder={"נושא "+(i+1)} onChange={this.onChange} name={this.title+(i+1)} />
              <Form.Control.Feedback type="invalid">
            *
          </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>)
            for (let j = 0; j < this.state.cardsNum; j++) {
                template.push( 
                    <Form.Group controlId="formGrid">
                    <Form.Control required className="cardInput" placeholder={"כרטיסייה "+(j+1)}
                     onChange={this.onChange} name={this.content+(i+1)+(j+1)} />
                     <Form.Control.Feedback type="invalid">
                     *
                   </Form.Control.Feedback>
                   </Form.Group>
                )
            }
        }
            return template;
    }
    
    


    render() {
        return (
            <div>
            <Form className="form" >
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>מספר הנושאים</Form.Label>
                    <Form.Control required as="select" name="topicsNum" className="chooseTopicNumbers form" onChange={this.onChange} >
                    <option>בחרו מספר</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>מספר הכרטיסיות לכל נושא</Form.Label>
                    <Form.Control required as="select" name="cardsNum"  className="chooseTopicNumbers form" onChange={this.onChange}>
                    <option>בחרו מספר</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    </Form.Control>
                </Form.Group>
                <Button className="buttonStyle" onClick={() => this.selectQeustionNum()}>
                    Select
                </Button>
                            </Form>
                            { this.state.topicsNum && this.state.cardsNum ?
                                <Container>
                                    <Form className="form" name="sets" noValidate validated={this.state.validated}
                                     required onSubmit={this.onFormSubmit}>
                                                    <Form.Group controlId="formGrid">
                                                            <Form.Label>נושא השיחה</Form.Label>
                                                            <Form.Control required type="text" placeholder={"נושא השיחה"}
                                                             onChange={this.onChange} name={'subject'} />
                                                            <Form.Control.Feedback type="invalid">
                                                            *
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                        {this.createQeustion()}

                                    <Button className="buttonStyle" variant="primary" type="submit">
                                      Submit
                                    </Button>
                                  </Form>
                                </Container>
                               
                            
                : null
                    }
                            </div>
                        );
                }
                }

export default AddQuestionSet