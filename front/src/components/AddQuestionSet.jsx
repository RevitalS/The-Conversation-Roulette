import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class AddQuestionSet extends Component {

    constructor(props) {
        super(props)
        this.state = { isSelect: false};
        this.onChange = this.onChange.bind(this);

    }


    onChange = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        this.setState({ [key]: val });
        console.log(this.state);
    }

    // sendToServer() {
    //     fetch(this.props.serverUrl + '/qeustionset', {
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(this.state)
    //     })
    //     .catch(err => this.setState({err, isLoading: false}));
    // }

    createQeustion = () => {
        this.setState({isSelect: true});
        console.log(this.state);

            let drinksObj = this.state.topicsNum.map((dish, i) => ({id: i, title: dish}));
            let template = 
            (<section>
                <ul style={{ textAlign: "left" }}>
                    {drinksObj.map((dish) => (
                        <li key={dish.id}>{dish.title}</li>
                    ))}
                </ul>
            </section>);
    
            return template;
        }
    


    render() {
        return (
            <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>מספר הנושאים</Form.Label>
                    <Form.Control as="select" name="topicsNum" onChange={this.onChange} >
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
                    <Form.Control as="select" name="cardsNum" onChange={this.onChange}>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    </Form.Control>
                </Form.Group>
                <Button onClick={() => this.createQeustion()}>
                    Select
                </Button>
                            </Form>
                            { this.state.isSelect ?
               ( <Form>
                <Form.Group>
                <Form.Control as="select" size="lg">
                    <option>Large select</option>
                </Form.Control>
                <br />
                <Form.Control as="select">
                    <option>Default select</option>
                </Form.Control>
                <br />
                <Form.Control size="sm" as="select">
                    <option>Small select</option>
                </Form.Control>
                </Form.Group>
                </Form> )
                : (<div></div>)
                    }
                            </div>
                        );
                    }
                }

export default AddQuestionSet